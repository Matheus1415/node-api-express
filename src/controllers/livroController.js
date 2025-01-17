import mongoose from "mongoose";
import { Autor } from "../models/autor.js";
import {livro} from "../models/index.js";

class LivroController {
  static async listarLivros(req, res, next) {
    try {
      const listaLivro = await livro.find({});
      res.status(200).json({ message: "Success", livros: listaLivro });
    } catch (error) {
      next(error);
    }
  }

  static async cadastrarLivro(req, res, next) {
    try {
      const { autor, ...dadosLivro } = req.body;
      const novoLivro = await livro.create({ ...dadosLivro, autor });
      res.status(201).json({ message: "Livro cadastrado", livro: novoLivro });
    } catch (error) {
      next(error);
    }
  }

  static async listarLivroPorId(req, res, next) {
    try {
      const livroId = req.params.id;
      const listaEncontrado = await livro.findById(livroId);

      if (!listaEncontrado) {
        return next(new NaoEncontrado("ID do livro não encontrado."));
      }

      res
        .status(200)
        .json({ message: "Livro encontrado", livro: listaEncontrado });
    } catch (error) {
      next(error);
    }
  }

  static async atualizarLivro(req, res, next) {
    try {
      const livroId = req.params.id;
      const livroAtualizado = await livro.findByIdAndUpdate(livroId, req.body, {
        new: true,
        runValidators: true,
      });

      if (!livroAtualizado) {
        return next(new NaoEncontrado("ID do livro não encontrado."));
      }

      res
        .status(200)
        .json({ message: "Livro editado", livro: livroAtualizado });
    } catch (error) {
      next(error);
    }
  }

  static async deletarLivro(req, res, next) {
    try {
      const livroId = req.params.id;
      const livroDeletado = await livro.findByIdAndDelete(livroId);

      if (!livroDeletado) {
        return next(new NaoEncontrado("ID do livro não encontrado."));
      }

      res.status(200).json({ message: "Livro deletado", livro: livroDeletado });
    } catch (error) {
      next(error);
    }
  }

  static async listarLivroPorFiltro(req, res, next){
    try {
      const { editora, titulo } = req.query;
      const livroResultado = await livro.find({
        editora: editora,
        titulo: titulo,
      });

      res
      .status(200)
      .json({ message: "Livro encontrado", livro: livroResultado });

    } catch (error) {
      next(error);
    }
  }

}

export default LivroController;
