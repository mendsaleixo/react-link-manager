// /server/src/controllers/link.controller.js

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// --- CREATE ---
const createLink = async (req, res) => {
  try {
    const { title, url } = req.body;
    if (!title || !url) {
      return res.status(400).json({ error: "Título e URL são obrigatórios." });
    }
    const newLink = await prisma.link.create({
      data: { title, url },
    });
    res.status(201).json(newLink);
  } catch (error) {
    res.status(500).json({ error: "Não foi possível criar o link." });
  }
};

// --- READ ALL ---
const getAllLinks = async (req, res) => {
  try {
    const links = await prisma.link.findMany();
    res.status(200).json(links);
  } catch (error) {
    res.status(500).json({ error: "Não foi possível buscar os links." });
  }
};

// --- READ ONE ---
const getLinkById = async (req, res) => {
  try {
    const { id } = req.params;
    const link = await prisma.link.findUnique({ where: { id } });
    if (!link) {
      return res.status(404).json({ error: "Link não encontrado." });
    }
    res.status(200).json(link);
  } catch (error) {
    res.status(500).json({ error: "Não foi possível buscar o link." });
  }
};

// --- UPDATE ---
const updateLink = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, url } = req.body;
    const updatedLink = await prisma.link.update({
      where: { id },
      data: { title, url },
    });
    res.status(200).json(updatedLink);
  } catch (error) {
    res.status(500).json({ error: "Não foi possível atualizar o link." });
  }
};

// --- DELETE ---
const deleteLink = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.link.delete({ where: { id } });
    res.status(204).send(); // Sucesso, sem conteúdo para retornar
  } catch (error) {
    res.status(500).json({ error: "Não foi possível deletar o link." });
  }
};

module.exports = {
  createLink,
  getAllLinks,
  getLinkById,
  updateLink,
  deleteLink,
};
