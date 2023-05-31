const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const {media1,media2} = require('./script')

// Configurar o body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configurar a conexão com o banco de dados MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12499183',
  database: 'pi'
});

// Conectar ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ', err);
    return;
  }
  console.log('Conexão com o banco de dados estabelecida com sucesso!');
});

// Definir uma rota para a página inicial
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Definir uma rota para processar o envio de dados
app.post('/enviar-dados', (req, res) => {
  const dados = req.body;

  // Executar a inserção dos dados no banco de dados
  connection.query('INSERT INTO respostas1 (media) VALUES (?)', dados, (err, result) => {
    if (err) {
      console.error('Erro ao inserir os dados: ', err);
      res.sendStatus(500);
      return;
    }
    console.log('Dados inseridos com sucesso!');
    res.sendStatus(200);
  });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
