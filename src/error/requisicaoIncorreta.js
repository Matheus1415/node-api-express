import BaseError from "./errorBase.js";

class RequisicaoIncorreta extends BaseError{
    constructor(messagem = "Um ou mais dados fornecidos estão incorretos."){
        super(messagem,400);
    }
}

export default RequisicaoIncorreta;