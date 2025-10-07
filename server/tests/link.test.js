// /server/tests/link.test.js

const request = require("supertest");
const app = require("../src/app");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// -- HOOK DO JEST: Limpa o banco de dados DEPOIS de TODOS os testes do arquivo rodarem --
afterAll(async () => {
  // Deleta todos os registros da tabela Link
  await prisma.link.deleteMany();
  // Desconecta do banco de dados
  await prisma.$disconnect();
});

describe("API de Links", () => {
  // Variável para guardar o ID do link que vamos criar, para usar nos outros testes
  let linkId;

  // Teste para a rota POST /api/links (CRIAR)
  it("deve ser capaz de criar um novo link", async () => {
    const response = await request(app).post("/api/links").send({
      title: "Google",
      url: "https://google.com",
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.title).toBe("Google");

    // Salva o ID do link criado para usar nos próximos testes
    linkId = response.body.id;
  });

  // Teste para a rota GET /api/links (LISTAR)
  it("deve retornar uma lista de links contendo o link criado", async () => {
    const response = await request(app).get("/api/links");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    // Verifica se a lista não está vazia
    expect(response.body.length).toBeGreaterThan(0);
  });

  // Teste para a rota PUT /api/links/:id (ATUALIZAR)
  it("deve ser capaz de atualizar um link existente", async () => {
    const response = await request(app)
      .put(`/api/links/${linkId}`) // Usa o ID que guardamos
      .send({
        title: "Google Editado",
        url: "https://www.google.com.br",
      });

    expect(response.status).toBe(200);
    expect(response.body.title).toBe("Google Editado");
  });

  // Teste para a rota DELETE /api/links/:id (DELETAR)
  it("deve ser capaz de deletar um link existente", async () => {
    const response = await request(app).delete(`/api/links/${linkId}`); // Usa o ID que guardamos

    expect(response.status).toBe(204); // 204 significa "No Content", sucesso para delete
  });
});
