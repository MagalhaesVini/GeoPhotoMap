const express = require('express');
const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');

const app = express();
const PORT = 3000;

// Motor de views e arquivos estáticos
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/img', express.static(path.join(__dirname, 'img')));
app.use('/leaflet', express.static(path.join(__dirname, 'node_modules/leaflet/dist')));
app.use('/leaflet-cluster', express.static(path.join(__dirname, 'node_modules/leaflet.markercluster/dist')));
app.use('/leaflet-routing', express.static(path.join(__dirname, 'node_modules/leaflet-routing-machine/dist')));


app.get('/', (req, res) => {
  const resultados = [];

  fs.createReadStream(path.join(__dirname, 'coordenadas.csv'))
    .pipe(csv.parse({ headers: true }))
    .on('data', (row) => {
      resultados.push({
        name: row.Name,
        lat: parseFloat(row.Latitude),
        lng: parseFloat(row.Longitude),
        img: `/img/${row.Name}`
      });
    })
    .on('end', () => {
      res.render('mapa', { imagens: resultados });
    });
});

app.listen(PORT, () => {
  console.log(`🗺️  Mapa disponível em: http://localhost:${PORT}`);
});
