import RequisicaoIncorreta from "./requisicaoIncorreta.js";

class ErrorValidacao extends RequisicaoIncorreta {
    constructor(error) {  
        const mensagensError = Object.values(error.errors)
            .map(err => err.message) 
            .join('; ');
        
        super(`Os seguintes erros foram encontrados: ${mensagensError}`);
    }
}

export default ErrorValidacao;
