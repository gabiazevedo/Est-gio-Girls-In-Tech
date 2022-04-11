// app.js concentra as rotas da API
import express from "express"; // outra forma de fazer é: const express = require('express');

const app = express();

app.use(express.json());

const livros = [
  { id: 1, titulo: "Senhor do Anéis" },
  { id: 2, titulo: "O Hobbit"}
];

app.get('/', (_req, res) => {
  res.status(200).send('Curso de Node');
});

app.get('/livros', (_req, res) => {
  res.status(200).json(livros);
});

app.get('/livros/:id', (req, res) => {
  let index = buscaLivro(req.params.id);
  res.json(livros[index]);
});

app.post('/livros', (req, res) => {
  livros.push(req.body);
  res.status(201).send('Livro cadastrado com sucesso');
});

app.put('/livros/:id', (req, res) => {
  let index = buscaLivro(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.json(livros);
});

app.delete('/livros/:id', (req, res) => {
  let { id } = req.params;
  let index = buscaLivro(id);
  livros.splice(index, 1); // primeiro parâmetro do splice() é o índide em que quero iniciar a deleção de elementos do array                                       
  res.send(`Livro ${id} removido com sucesso`) //e o segundo parâmetro eu digo quantos elementos quero apagar à partir do index inicial do primeiro parâmetro
})

function buscaLivro(id) {
  return livros.findIndex(livro => livro.id == id);
};

export default app;   // também podemos exportar dessa maneira: module.exports = app;