// /server/src/server.js

const app = require('./app'); // Importa nossa aplicação configurada

const PORT = 3333;

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});