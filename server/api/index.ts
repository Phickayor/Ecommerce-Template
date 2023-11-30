import express from "express";
import { productsRouter } from "../routes/products.route";
import { authRouter } from "../routes/auth.route";
import { usersRouter } from "../routes/users.routes";

const router = express();

router.use("/auth", authRouter);
router.use("/users", usersRouter);
router.use("/products", productsRouter);

export { router };
