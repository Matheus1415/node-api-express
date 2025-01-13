import express from "express";
import livrosRouter from "./livrosRouter.js";
import autoresRouter from './autoresRouter.js';

const routes = (app) => {
  app.use(express.json());
  app.route('/').get((req, res) => res.status(200).send("Curso de NodeJS"));

  app.use(livrosRouter);
  app.use(autoresRouter);
};

export default routes;
