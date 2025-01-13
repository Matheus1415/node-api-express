import express from "express";
import AutoresController from "../controllers/autoresController.js";

const autoresRouter = express.Router();

autoresRouter.get('/autores', AutoresController.listarAutores);
autoresRouter.get("/autor/:id", AutoresController.listarAutorPorId);
autoresRouter.post("/autor", AutoresController.cadastrarAutor);
autoresRouter.put("/autor/:id", AutoresController.atualizarAutor);
autoresRouter.delete("/autor/:id", AutoresController.deletarAutor);

export default autoresRouter;
