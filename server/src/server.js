// /server/src/server.js

const express = require("express");
const cors = require("cors");
const linkRoutes = require("./routes/link.routes.js"); // <-- IMPORTAÇÃO

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", linkRoutes); // <-- USO

const PORT = 3333;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
