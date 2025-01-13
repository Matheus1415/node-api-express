import mongoose from "mongoose";
import {Autor} from "../models/autor.js";

class AutoresController {
  static async listarAutores(req, res) {
    try {
      const autores = await Autor.find({});
      res.status(200).json(autores);
    } catch (error) {
      console.error("Erro ao listar autores:", error);
      res.status(500).json({ message: "Erro interno do servidor", error: error.message });
    }
  }

  static async listarAutorPorId(req, res) {
    try {
      const autorId = req.params.id;
      const autor = await Autor.findById(autorId);
      if (autor == null) {
        return res.status(404).json({ message: "Autor não encontrado" });
      }
      res.status(200).json(autor);
    } catch (error) {
      if (error instanceof mongoose.Error.CastError) {
        return res.status(400).json({ message: "ID fornecido é inválido." });
      }
      console.error("Erro ao buscar autor por ID:", error);
      res.status(500).json({ message: "Erro interno do servidor", error: error.message });
    }
  }

  static async cadastrarAutor(req, res) {
    try {
      const novoAutor = await Autor.create(req.body);
      res.status(201).json({ message: "Autor cadastrado", autor: novoAutor });
    } catch (error) {
      console.error("Erro ao cadastrar autor:", error);
      res.status(500).json({ message: "Erro interno do servidor", error: error.message });
    }
  }

  static async atualizarAutor(req, res) {
    try {
      const autorId = req.params.id;
      const autorAtualizado = await Autor.findByIdAndUpdate(autorId, req.body, {
        new: true,
        runValidators: true,
      });
      if (!autorAtualizado) {
        return res.status(404).json({ message: "Autor não encontrado" });
      }
      res.status(200).json({ message: "Autor atualizado", autor: autorAtualizado });
    } catch (error) {
      console.error("Erro ao atualizar autor:", error);
      res.status(500).json({ message: "Erro interno do servidor", error: error.message });
    }
  }

  static async deletarAutor(req, res) {
    try {
      const autorId = req.params.id;
      const autorDeletado = await Autor.findByIdAndDelete(autorId);
      if (!autorDeletado) {
        return res.status(404).json({ message: "Autor não encontrado" });
      }
      res.status(200).json({ message: "Autor deletado", autor: autorDeletado });
    } catch (error) {
      console.error("Erro ao deletar autor:", error);
      res.status(500).json({ message: "Erro interno do servidor", error: error.message });
    }
  }
}

export default AutoresController;
