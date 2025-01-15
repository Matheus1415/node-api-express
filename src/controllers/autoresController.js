import mongoose from "mongoose";
import { Autor } from "../models/autor.js";

class AutoresController {
  static async listarAutores(req, res, next) {
    try {
      const autores = await Autor.find({});
      res.status(200).json(autores);
    } catch (error) {
      next(error);
    }
  }

  static async listarAutorPorId(req, res, next) {
    try {
      const autorId = req.params.id;
      const autor = await Autor.findById(autorId);
      if (autor == null) {
        return res.status(404).json({ message: "Autor não encontrado" });
      }
      res.status(200).json(autor);
    } catch (error) {
      next(error);
    }
  }

  static async cadastrarAutor(req, res, next) {
    try {
      const novoAutor = await Autor.create(req.body);
      res.status(201).json({ message: "Autor cadastrado", autor: novoAutor });
    } catch (error) {
      next(error);
    }
  }

  static async atualizarAutor(req, res, next) {
    try {
      const autorId = req.params.id;
      const autorAtualizado = await Autor.findByIdAndUpdate(autorId, req.body, {
        new: true,
        runValidators: true,
      });
      if (!autorAtualizado) {
        return res.status(404).json({ message: "Autor não encontrado" });
      }
      res
        .status(200)
        .json({ message: "Autor atualizado", autor: autorAtualizado });
    } catch (error) {
      next(error);
    }
  }

  static async deletarAutor(req, res, next) {
    try {
      const autorId = req.params.id;
      const autorDeletado = await Autor.findByIdAndDelete(autorId);
      if (!autorDeletado) {
        return res.status(404).json({ message: "Autor não encontrado" });
      }
      res.status(200).json({ message: "Autor deletado", autor: autorDeletado });
    } catch (error) {
      next(error);
    }
  }
}

export default AutoresController;
