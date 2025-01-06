import express from "express";
import conectDataBase from "./config/dbConect.js";
import routes from "./routers/index.js";

const conexao = await conectDataBase();

conexao.on("error", (error) => {
  console.error("Erro ao conectar ao MongoDB:", error);
});

conexao.once("open", () => {
  console.log("Conectado ao MongoDB!");
});

const app = express();
routes(app)
app.get("/livros", async (req, res) => {
  try {
    const listaLivro = await livro.find({});

    res.status(200).json({ message: "Success", livros: listaLivro });
  } catch (error) {
    console.error("Erro ao obter os livros:", error);
    res
      .status(500)
      .json({ message: "Erro interno do servidor", error: error.message });
  }
});

app.get("/livros/:id", (req, res) => {
  try {
    const livroId = req.params.id;
    const livro = livros.find((livro) => livro.id === parseInt(livroId));

    if (livro == null) {
      return res.status(404).json({ message: "Livro não encontrado" });
    }

    res.status(200).json({ message: "Livro encontrado", livros: livro });
  } catch (error) {
    console.error("Erro ao obter o livro:", error);
    res
      .status(500)
      .json({ message: "Erro interno do servidor", error: error.message });
  }
});

app.post("/livros", (req, res) => {
  try {
    livros.push(req.body);
    return res
      .status(201)
      .json({ message: "Livro cadastrado", livro: req.body });
  } catch (error) {
    console.error("Erro ao cadastrar o livro: ", error);
    res
      .status(500)
      .json({ message: "Erro interno do servidor", error: error.message });
  }
});

app.put("/livros/:id", (req, res) => {
  try {
    const livroId = req.params.id;
    const { name } = req.body;

    const livro = livros.find((livro) => livro.id === parseInt(livroId));
    livro.name = name;

    if (livro == null) {
      return res.status(404).json({ message: "Livro não encontrado" });
    }

    return res.status(200).json({
      message: "Livro atualizado com sucesso",
      livro: livro,
    });
  } catch (error) {
    console.error("Erro ao editar o livro: ", error);
    res
      .status(500)
      .json({ message: "Erro interno do servidor", error: error.message });
  }
});

app.delete("/livros/:id", (req, res) => {
  try {
    const livroId = parseInt(req.params.id);
    const index = livros.find(livro => livro.id === livroId);
    if (index == null) {
      return res.status(404).json({ message: "Livro não encontrado" });
    }
    const [livroDeletado] = livros.splice(index, 1);

    res.status(204).json({
      message: "Livro deletado com sucesso",
      livro: livroDeletado
    });
  } catch (error) {
    console.error("Erro ao deletar o livro: ", error);
    res.status(500).json({
      message: "Erro interno do servidor",
      error: error.message
    });
  }
});


export default app;
