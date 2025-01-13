import express from "express";
import LivroController from "../controllers/LivroController.js";

const livrosRouter = express.Router();

livrosRouter.get('/livros', LivroController.listarLivros);
livrosRouter.get("/livros/:id", LivroController.listarLivroPorId);
livrosRouter.post("/livros", LivroController.cadastrarLivro);
livrosRouter.put("/livros/:id", LivroController.atualizarLivro);
livrosRouter.delete("/livros/:id", LivroController.deletarLivro);

export default livrosRouter;
