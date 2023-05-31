const express = require('express');
const mongoose = require('mongoose');

// Conecta-se ao banco de dados MongoDB
mongoose.connect('mongodb+srv://user:user@apitest.1nwu9ox.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Conexão com o MongoDB estabelecida');
})
.catch((error) => {
  console.error('Erro ao conectar-se ao MongoDB:', error);
});

// Defina o esquema do documento para o formulário
const FormularioSchema = new mongoose.Schema({
  campo1: String,
  campo2: String,
  // ... adicione outros campos conforme necessário
});

// Crie um modelo para o formulário com base no esquema
const FormularioModel = mongoose.model('Formulario', FormularioSchema);

// Crie uma instância do aplicativo Express
const app = express();

// Parse o corpo das solicitações como JSON
app.use(express.json());

// Rota para receber os dados do formulário
app.post('/formulario', async (req, res) => {
  try {
    // Crie um novo documento do formulário com os dados recebidos
    const formulario = new FormularioModel(req.body);

    // Salve o documento no banco de dados
    await formulario.save();

    res.status(200).json({ message: 'Dados do formulário salvos com sucesso' });
  } catch (error) {
    console.error('Erro ao salvar os dados do formulário:', error);
    res.status(500).json({ error: 'Erro ao salvar os dados do formulário' });
  }
});

// Inicie o servidor na porta desejada
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor em execução na porta ${PORT}`);
});
