import Livro from "../models/Livro.js";

class LivroController {
  static async listarLivros(req, res) {
    try {
      const listaLivro = await Livro.find({});
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
      const novoLivro = await Livro.create(req.body);
      res.status(201).json({ message: "Livro cadastrado", livro: novoLivro });
    } catch (error) {
      console.error("Erro ao cadastrar o livro: ", error);
      res
        .status(500)
        .json({ message: "Erro interno do servidor", error: error.message });
    }
  }
}

export default LivroController;
