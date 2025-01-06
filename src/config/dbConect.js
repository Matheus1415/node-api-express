import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGO_CONECTION_STRING = process.env.MONGO_CONECTION_STRING;

async function conectDataBase() {
  mongoose
    .connect(MONGO_CONECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Conexão com o MongoDB foi bem-sucedida!");
    })
    .catch((error) => {
      console.error("Erro ao conectar ao MongoDB:", error);
    });

  return mongoose.connection;
}

export default conectDataBase;
