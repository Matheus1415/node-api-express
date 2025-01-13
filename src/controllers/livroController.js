import { Autor } from "../models/autor.js";
import livro from "../models/Livro.js";

class LivroController {
  static async listarLivros(req, res) {
    try {
      const listaLivro = await livro.find({});
      res.status(200).json({ message: "Success", livros: listaLivro });
    } catch (error) {
      console.error("Erro ao obter os livros:", error);
      res
        .status(500)
        .json({ message: "Erro interno do servidor", error: error.message });
    }
  }

  static async cadastrarLivro(req, res) {
    try {
      const { autor, ...dadosLivro } = req.body;
  
      if (!mongoose.Types.ObjectId.isValid(autor)) {
        return res.status(400).json({ message: "ID de autor inválido." });
      }
      const autorEncontrado = await Autor.findById(autor);
      if (!autorEncontrado) {
        return res.status(404).json({ message: "Autor não encontrado." });
      }
  
      const novoLivro = await Livro.create({ ...dadosLivro, autor });
  
      res.status(201).json({ message: "Livro cadastrado", livro: novoLivro });
    } catch (error) {
      console.error("Erro ao cadastrar o livro: ", error);
      res.status(500).json({ message: "Erro interno do servidor", error: error.message });
    }
  }
  

  static async listarLivroPorId(req, res) {
    try {
      const livroId = req.params.id;
      const listaEncontrado = await livro.findById(livroId);

      if (!listaEncontrado) {
        return res.status(404).json({ message: "Livro não encontrado" });
      }

      res
        .status(200)
        .json({ message: "Livro encontrado", livro: listaEncontrado });
    } catch (error) {
      console.error("Erro ao buscar o livro: ", error);
      res
        .status(500)
        .json({ message: "Erro interno do servidor", error: error.message });
    }
  }

  static async atualizarLivro(req, res) {
    try {
      const livroId = req.params.id;
      const livroAtualizado = await livro.findByIdAndUpdate(
        livroId,
        req.body,
        { new: true, runValidators: true } 
      );

      if (!livroAtualizado) {
        return res.status(404).json({ message: "Livro não encontrado" });
      }

      res
        .status(200)
        .json({ message: "Livro editado", livro: livroAtualizado });
    } catch (error) {
      console.error("Erro ao editar o livro: ", error);
      res
        .status(500)
        .json({ message: "Erro interno do servidor", error: error.message });
    }
  }

  static async deletarLivro(req, res) {
    try {
      const livroId = req.params.id;
      const livroDeletado = await livro.findByIdAndDelete(livroId);

      if (!livroDeletado) {
        return res.status(404).json({ message: "Livro não encontrado" });
      }

      res.status(200).json({ message: "Livro deletado", livro: livroDeletado });
    } catch (error) {
      console.error("Erro ao deletar o livro: ", error);
      res
        .status(500)
        .json({ message: "Erro interno do servidor", error: error.message });
    }
  }
}

export default LivroController;
