const fs = require('fs');
const path = require('path');
const exifr = require('exifr');
const csv = require('fast-csv');

const inputFolder = 'img';

function getDateSuffix() {
  const now = new Date();
  return now.toLocaleDateString('pt-BR').split('/').join('-');
}

const outputCsv = `coordenadas-${getDateSuffix()}.csv`;

async function processImages() {
  if (!fs.existsSync(inputFolder)) {
    console.error(`❌ Pasta "${inputFolder}" não encontrada.`);
    return;
  }

  const files = fs.readdirSync(inputFolder).filter(file =>
    /\.(jpe?g)$/i.test(file)
  );

  console.log(`📂 Imagens encontradas na pasta "${inputFolder}": ${files.length}`);

  if (files.length === 0) {
    console.warn('⚠️ Nenhuma imagem .jpg/.jpeg encontrada na pasta.');
    return;
  }

  const rows = [];
  let semCoordenada = 0;

  for (const file of files) {
    const filepath = path.join(inputFolder, file);

    try {
      const gps = await exifr.gps(filepath);

      if (gps?.latitude && gps?.longitude) {
        rows.push({
          Name: file,
          Latitude: gps.latitude.toFixed(6),
          Longitude: gps.longitude.toFixed(6),
          HTML: `<img src="${file}" width="300">`
        });
      } else {
        semCoordenada++;
      }
    } catch (err) {
      console.error(`❌ Erro ao processar ${file}: ${err.message}`);
    }
  }

  if (rows.length === 0) {
    console.warn('⚠️ Nenhuma imagem com coordenadas válida foi processada.');
    return;
  }

  const ws = fs.createWriteStream(outputCsv);
  csv.write(rows, { headers: true }).pipe(ws);

  ws.on('finish', () => {
    console.log(`✅ CSV gerado com sucesso: ${outputCsv}`);
    console.log('📊 Resumo:');
    console.log(`   📸 Total de imagens:         ${files.length}`);
    console.log(`   ✅ Com coordenadas:         ${rows.length}`);
    console.log(`   🚫 Sem coordenadas:         ${semCoordenada}`);
    console.log(`   📝 Linhas inseridas no CSV: ${rows.length}`);
  });
}

processImages();
