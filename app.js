const express = require("express");

const app = express();
const PORT = 3030;

// Página Inicial da atividade:
app.get("/", (req, res) => {
  res.send(`

    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>Catálogo de Heróis</title>

       <style>
  body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 40px;
    color: #333;
  }

  .container {
    max-width: 800px;
    margin: auto;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.15);
  }

  h1 {
    text-align: center;
    color: #e62429;
  }

  h2 {
    color: #0476f2;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin: 10px 0;
  }

  a {
    text-decoration: none;
    color: #0476f2;
    font-weight: bold;
  }

  a:hover {
    color: #e62429;
  }

  hr {
    margin: 20px 0;
  }
      </style>

    </head>
  <body>

     <div class="container">

      <h1>Catálogo de Heróis</h1>

      <p>Explore os heróis mais famosos da Marvel e da DC Comics. Clique nos links abaixo para conhecer os personagens.</p>

      <h2>Empresas:</h2>
      <ul>
        <li><a href="/marvel">Marvel</a></li>
        <li><a href="/dc">DC</a></li>
      </ul>

      <hr>

      <h2>Personagens:</h2>
      <ul>
        <li><a href="/personagem/marvel/Thor">Thor</a></li>
        <li><a href="/personagem/marvel/Homem-de-Ferro">Homem de Ferro</a></li>
        <li><a href="/personagem/dc/Batman">Batman</a></li>
        <li><a href="/personagem/dc/Superman">Superman</a></li>
      </ul>
    </div>
    </body>
    </html>
  `);
});

// Página Marvel:
app.get("/marvel", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
   <head>
  <meta charset="UTF-8">
  <title>Catálogo de Heróis - Marvel</title>

    <style>
  body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 40px;
    color: #333;
  }

  .container {
    max-width: 800px;
    margin: auto;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.15);
  }

  h1 {
    text-align: center;
    color: #e62429;
  }

  h2 {
    color: #0476f2;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin: 10px 0;
  }

  a {
    text-decoration: none;
    color: #0476f2;
    font-weight: bold;
  }

  a:hover {
    color: #e62429;
  }

  hr {
    margin: 20px 0;
  }
      </style>
</head>

<body>
  <div class="container">
    <h1 style="color:#e62429;">Marvel Comics</h1>

      <p>
        A Marvel Comics é uma editora de quadrinhos famosa por seus
        super-heróis e pelo Universo Cinematográfico Marvel.
      </p>

      <h2>Personagens:</h2>
      <ul>
        <li><a href="/personagem/marvel/Thor">Thor</a></li>
        <li><a href="/personagem/marvel/Homem-de-Ferro">Homem de Ferro</a></li>
      </ul>

      <p><a href="/">Clique aqui para voltar para a Página Inicial.</a></p>
    </body>
    </html>
  `);
});

// Página DC:
app.get("/dc", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
  <head>
  <meta charset="UTF-8">
  <title>Catálogo de Heróis - DC</title>
    <style>
  body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 40px;
    color: #333;
  }

  .container {
    max-width: 800px;
    margin: auto;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.15);
  }

  h1 {
    text-align: center;
    color: #e62429;
  }

  h2 {
    color: #0476f2;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin: 10px 0;
  }

  a {
    text-decoration: none;
    color: #0476f2;
    font-weight: bold;
  }

  a:hover {
    color: #e62429;
  }

  hr {
    margin: 20px 0;
  }
      </style>
</head>

<body>
  <div class="container">
    <h1 style="color:#0476f2;">DC Comics</h1>

      <p>
        A DC Comics é uma das maiores editoras de quadrinhos do mundo,
        responsável por heróis icônicos como Batman e Superman.
      </p>

      <h2>Personagens:</h2>
      <ul>
        <li><a href="/personagem/dc/Batman">Batman</a></li>
        <li><a href="/personagem/dc/Superman">Superman</a></li>
      </ul>

      <p><a href="/">Clique aqui para voltar para a Página Inicial.</a></p>
    </body>
    </html>
  `);
});

// Rota dinâmica com dois parâmetros obrigatórios: empresa e nome do personagem.
app.get("/personagem/:empresa/:nome", (req, res) => {
  const { empresa, nome } = req.params;

  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>Catálogo de Heróis - ${nome}</title>

      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          margin: 40px;
        }

        .container {
          max-width: 800px;
          margin: auto;
          background: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0,0,0,0.15);
        }

        h1 {
          color: #0476f2;
          text-align: center;
        }

        a {
          text-decoration: none;
          color: #0476f2;
          font-weight: bold;
        }

        a:hover {
          color: #e62429;
        }
      </style>
    </head>

    <body>
      <div class="container">
        <h1>Informações do Personagem</h1>

        <p><strong>Empresa:</strong> ${empresa}</p>
        <p><strong>Nome:</strong> ${nome}</p>

        <p><a href="/">Voltar para a página inicial</a></p>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor executando em http://localhost:${PORT}`);
});