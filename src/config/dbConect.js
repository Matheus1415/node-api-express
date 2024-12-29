import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const USER = process.env.MONGO_USER;
const PASSWORD = process.env.MONGO_PASSWORD;
const CLUSTER = process.env.MONGO_CLUSTER;

async function conectDataBase() {
  mongoose
    .connect(
      `mongodb+srv://${USER}:${PASSWORD}@${CLUSTER}/livraria?retryWrites=true&w=majority&appName=Cluster0`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("Conexão com o MongoDB foi bem-sucedida!");
    })
    .catch((error) => {
      console.error("Erro ao conectar ao MongoDB:", error);
    });

    return mongoose.connection;
}

export default conectDataBase;