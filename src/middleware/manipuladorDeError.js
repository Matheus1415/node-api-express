import mongoose from "mongoose";
import BaseError from "../error/errorBase.js";
import ErrorValidacao from "../error/errorValidacao.js";
import NaoEncontrado from "../error/naoEncontrado.js";
import RequisicaoIncorreta from "../error/requisicaoIncorreta.js";

function manipuladorDeError(error, req, res, next) {
  if (error instanceof mongoose.Error.CastError) {
    return new RequisicaoIncorreta().enviarReposta(res);
  }

  if (error instanceof mongoose.Error.ValidationError) {
    return new ErrorValidacao(error).enviarReposta(res); 
  }

  if (error instanceof mongoose.Error.ValidationError) {
    return  new ErrorValidacao().enviarReposta(res);
  }

  return new BaseError().enviarReposta(res)  ;
}

export default manipuladorDeError;
