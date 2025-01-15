import mongoose from "mongoose";
import { autorSchema } from "./autor.js";

const livroSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: [true,"outor(a) é obrigatório"] },
    editora: { type: String,required: [true,"editora é obrigatório"] },
    preco: { type: Number },
    paginas: { type: Number },
    autor:autorSchema
  },
  { versionKey: false }
);

const livro = mongoose.model("livro", livroSchema);

export default livro;
