import express from "express";
import conectDataBase from "./config/dbConect.js";
import routes from "./routers/index.js";
import manipuladorDeError from "./middleware/manipuladorDeError.js";
import manipulador404 from "./middleware/manipulador404.js";

const conexao = await conectDataBase();

conexao.on("error", (error) => {
  console.error("Erro ao conectar ao MongoDB:", error);
});

conexao.once("open", () => {
  console.log("Conectado ao MongoDB!");
});

const app = express();
routes(app)

app.use(manipulador404);
app.use(manipuladorDeError)


export default app;
