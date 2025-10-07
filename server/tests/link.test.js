// /server/tests/link.test.js

// Importa o 'supertest' para fazer requisições HTTP
const request = require("supertest");
// Importa nossa aplicação Express para que o supertest possa executá-la
const app = require("../src/app"); // <-- Atenção aqui! Vamos criar este arquivo.

describe("API de Links", () => {
  // Teste para a rota GET /api/links
  it("deve retornar uma lista de links e status 200", async () => {
    const response = await request(app).get("/api/links"); // Faz a requisição GET

    // Verificações (Expectations)
    expect(response.status).toBe(200); // Esperamos que o status seja 200 (OK)
    expect(Array.isArray(response.body)).toBe(true); // Esperamos que o corpo seja um array
  });
});
