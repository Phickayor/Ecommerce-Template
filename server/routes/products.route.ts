import express from "express";

const productsRouter = express();

productsRouter.get("/");

export { productsRouter };
