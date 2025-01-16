class BaseError extends Error {
  constructor(message = "Error interno do servidor", status = 500) {
    super();
    this.message = message;
    this.status = status;   
  }

  enviarReposta(res){
    res.status(this.status).json({ message: this.message });
  }
}
export default BaseError;
