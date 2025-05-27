
## 🚀 Como Rodar o Projeto: Passo a Passo Mágico!

Siga estes passos para ver a mágica acontecer:

<details>
  <summary><strong>1. Clone este Universo (Repositório)</strong></summary>

  Abra seu terminal e execute:

  ```bash
  git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
  cd SEU_REPOSITORIO
  ```

  Substitua `SEU_USUARIO/SEU_REPOSITORIO` pelo caminho real do seu projeto.
</details>

<details>
  <summary><strong>2. Instale os Artefatos Mágicos (Dependências)</strong></summary>

  No terminal, dentro da pasta do projeto, execute:

  ```bash
  npm install
  ```

  Isso instalará todas as bibliotecas listadas no `package.json`.
</details>

<details>
  <summary><strong>3. Prepare Suas Relíquias (Imagens)</strong></summary>

  - Crie uma pasta chamada `img` na raiz do seu projeto (se ainda não existir).  
  - Copie suas fotos no formato `.jpg` ou `.jpeg` que contenham dados de geolocalização (GPS) para dentro desta pasta `img`.

  📸 Dica: A maioria dos smartphones modernos salva automaticamente as coordenadas GPS nas fotos se a permissão de localização estiver ativa para a câmera.

  Exemplo:

  ```
  SEU_REPOSITORIO/
  ├── img/
  │   ├── foto_praia.jpg
  │   ├── montanha_aventura.jpeg
  │   └── selfie_viagem.jpg
  └── ... (outros arquivos do projeto)
  ```
</details>

<details>
  <summary><strong>4. Convoque o Oráculo (Gerar o CSV)</strong></summary>

  Este passo é crucial! O script `gerar_csv.js` vai ler suas imagens na pasta `img`, extrair as coordenadas e criar um arquivo CSV.

  No terminal, execute:

  ```bash
  node gerar_csv.js
  ```

  Após a execução, você verá mensagens no console:

  ```
  📂 Imagens encontradas na pasta "img": X
  ✅ CSV gerado com sucesso: coordenadas-DD-MM-AAAA.csv
  ```

  ⚠️ **ATENÇÃO IMPORTANTE!** ⚠️  
  O script gera um arquivo chamado `coordenadas-DD-MM-AAAA.csv`, mas o `app.js` espera um arquivo chamado `coordenadas.csv`.

  Portanto, você tem duas opções:

  1. **Renomeie o arquivo gerado**: após rodar `gerar_csv.js`, renomeie o CSV gerado para `coordenadas.csv`.
  2. **OU Modifique o `app.js`**: altere a linha que lê o arquivo para aceitar o nome gerado dinamicamente.

</details>

<details>
  <summary><strong>5. Desperte o Dragão do Mapa (Iniciar o Servidor)</strong></summary>

  Agora que o `coordenadas.csv` está pronto e corretamente nomeado, inicie o servidor:

  ```bash
  node app.js
  ```

  Você verá a mensagem:

  ```
  🗺️ Mapa disponível em: http://localhost:3000
  ```
</details>

<details>
  <summary><strong>6. Explore Seu Mundo (Abrir o Mapa no Navegador)</strong></summary>

  Abra seu navegador e acesse:

  ```
  http://localhost:3000
  ```

  🎉 Parabéns! Você verá um mapa com suas fotos marcadas e uma galeria ao lado.
</details>

---

## 🔧 Como Funciona a Mágica? (Detalhes Técnicos)

### 📜 `gerar_csv.js` - O Coletor de Coordenadas

- **Verifica a pasta `img`**  
- **Filtra imagens `.jpg` ou `.jpeg`**  
- **Extrai dados EXIF com `exifr`**  
- **Gera o CSV com `fast-csv`**  
- **Cria colunas com: nome do arquivo, lat/lon, HTML da imagem**

### 🌐 `app.js` - O Mestre do Mapa

- Inicializa servidor Express  
- Usa `ejs` como template engine  
- Serve pastas estáticas (`img/`, `node_modules/...`)  
- Lê o `coordenadas.csv`  
- Renderiza a view `mapa.ejs` com os dados

### 🗺️ `views/mapa.ejs` - A Tela Mágica

- Divide a tela em mapa e galeria  
- Estiliza com CSS do Leaflet  
- Renderiza miniaturas e marcadores com popups  
- Ao clicar na miniatura, centraliza o mapa e abre o popup

---

## 💡 Possíveis Melhorias Futuras

- ✨ **Cluster de marcadores** (`leaflet.markercluster`)  
- 🧭 **Rotas entre pontos** (`leaflet-routing-machine`)  
- 📅 **Filtro por data/hora**  
- 🏷️ **Tags e descrições por imagem**  
- 💾 **Upload via navegador**  
- ⚙️ **CSV dinâmico no frontend/backend**  
- 🎨 **Estilo aprimorado**

---

## 🤔 Solução de Problemas Comuns

**"Mapa não mostra nenhuma foto" / "Galeria vazia"**

- Verifique se há imagens na pasta `img`
- Certifique-se de que contêm dados GPS (use um visualizador EXIF)
- Confirme que rodou `node gerar_csv.js` após inserir as imagens
- Renomeie corretamente o CSV gerado para `coordenadas.csv`
- Verifique mensagens no console do terminal e no navegador

---

## 🤝 Como Contribuir

1. Faça um Fork  
2. Crie uma Branch: `git checkout -b minha-feature`  
3. Commit: `git commit -m "Adiciona minha feature"`  
4. Push: `git push origin minha-feature`  
5. Abra um Pull Request!

---

## 📜 Licença

Este projeto é distribuído sob a licença MIT.

```txt
MIT License

Copyright (c) [Ano] [Seu Nome]

Permission is hereby granted, free of charge, to any person obtaining a copy...
```

---

<div align="center">
  <p>Feito com ❤️ e muitas xícaras de ☕ por <a href="https://github.com/SEU_USUARIO">Seu Nome</a>.</p>
  <a href="mailto:seu_email@exemplo.com"><img src="https://raw.githubusercontent.com/MikeCodesDotNET/ColoredBadges/master/svg/social/gmail.svg" alt="Gmail" height="30"></a>
  <a href="https://www.linkedin.com/in/seu_linkedin/" target="_blank"><img src="https://raw.githubusercontent.com/MikeCodesDotNET/ColoredBadges/master/svg/social/linkedin.svg" alt="LinkedIn" height="30"></a>
</div>
