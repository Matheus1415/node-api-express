import express from "express";
import conectDataBase from "./config/dbConect.js";
import routes from "./routers/index.js";

const conexao = await conectDataBase();

conexao.on("error", (error) => {
  console.error("Erro ao conectar ao MongoDB:", error);
});

conexao.once("open", () => {
  console.log("Conectado ao MongoDB!");
});

const app = express();
routes(app)


export default app;
