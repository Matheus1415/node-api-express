import BaseError from "./errorBase.js";

class NaoEncontrado extends BaseError {
    constructor(message = "Página não encontrada."){
        super(message, 404)
    }
}
export default NaoEncontrado;