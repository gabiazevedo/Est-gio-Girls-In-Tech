// app.js concentra as rotas da API
import express from "express"; // outra forma de fazer é: const express = require('express');
import db from "./config/dbConnect.js";
import livros from "./model/Livro.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
  console.log('Conexão com o banco feita com sucesso');
});

const app = express();

app.use(express.json());

routes(app);

export default app;   // também podemos exportar dessa maneira: module.exports = app;