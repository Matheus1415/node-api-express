import mongoose from "mongoose";
import { autorSchema } from "./autor.js";

const livroSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: [true, "outor(a) é obrigatório"] },
    editora: { type: String, required: [true, "editora é obrigatório"] },
    preco: { type: Number },
    paginas: { type: Number, min:[10, "O número de páginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}"], max:[5000,"O número de páginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}"] },
    autor: {type: mongoose.Schema.Types.ObjectId, ref:"autores", required:[true, "O(a) autor(a) é  obrigatório"] },
  },
  { versionKey: false }
);

const livro = mongoose.model("livro", livroSchema);

export default livro;
