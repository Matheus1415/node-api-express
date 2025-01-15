import mongoose from "mongoose";

const autorSchema = mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: [true, "o nome do(a) autor(a) é obrigatório"] },
    nacionalidade: { type: String },
  },
  { versionKey: false }
);
const Autor = mongoose.model("autores", autorSchema);

export { Autor, autorSchema };
