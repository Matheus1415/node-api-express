import express from "express";
import LivroController from "../controllers/LivroController.js";

const livrosRouter = express.Router();

livrosRouter.get('/livros', LivroController.listarLivros);
livrosRouter.post("/livros", LivroController.cadastrarLivro);

export default livrosRouter;
