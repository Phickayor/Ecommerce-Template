import express from "express";

const usersRouter = express();

usersRouter.get("/");

export { usersRouter };
