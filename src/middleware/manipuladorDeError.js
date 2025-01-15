import mongoose from "mongoose";

function manipuladorDeError(error, req, res, next) {
  if (error instanceof mongoose.Error.CastError) {
    return res
      .status(400)
      .json({ message: "Um ou mais dados fornecidos estão incorretos." });
  }

  if (error instanceof mongoose.Error.ValidationError) {
      const messagensError = Object.values(error.errors).map(error => error.message).join('; ');

    return res
      .status(400)
      .json({ message: `Os seguintes erros foram encontrados: ${messagensError}` });
  }

  console.error("Erro interno do servidor:", error); 
  return res
    .status(500)
    .json({ message: "Erro interno do servidor", error: error.message });
}

export default manipuladorDeError;
