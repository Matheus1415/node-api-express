import express from "express";

const app = express();
app.use(express.json());

const livros = [
  { id: 1, name: "Senhor dos Aneis" },
  { id: 2, name: "3 Marias" },
];

app.get("/", (req, res) => {
  res.status(200).send({ message: "Success" });
});

app.get("/livros", (req, res) => {
  res.status(200).json({ message: "Success", livros:livros });
});

app.get("/livros/:id", (req, res) => {
  const livroId = req.params.id;
  const livro = livros.find((livro) => livro.id === parseInt(livroId));  
  res.status(200).json({ message: "Livro encontrado", livros:livro });
});

app.post('/livros', (req, res) => {
    livros.push(req.body); 
    return res.status(201).json({ message: "Livro cadastrado", livro:req.body})
})

app.put('/livros/:id', (req, res) => {
    const livroId = parseInt(req.params.id); 
    const { name } = req.body; 
    const livro = livros.find((livro) => livro.id === parseInt(livroId));  
    livro.name = name;

    return res.status(200).json({
        message: "Livro atualizado com sucesso",
        livro: livro,
    });
});


export default app;
