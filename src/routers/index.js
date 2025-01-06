import express from "express";
import livrosRouter from "./livrosRouter.js";

const  routes = (app) => {
    app.route('/').get((req, res) => res.status(200).send("Curso de NodeJS"));
    app.use(express.json(),livrosRouter)

}

export default routes;