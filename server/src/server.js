// src/server.js

const express = require('express');
const cors = require('cors');

// Cria a instância da aplicação Express
const app = express();

// Middleware para permitir requisições de outras origens (o nosso frontend)
app.use(cors());

// Middleware para o Express entender requisições com corpo em JSON
app.use(express.json());

// Uma rota de teste para verificar se a API está funcionando
app.get('/', (req, res) => {
  res.status(200).json({ message: 'API is running and ready to go!' });
});

// Define a porta em que o servidor vai escutar
const PORT = 3333;

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});