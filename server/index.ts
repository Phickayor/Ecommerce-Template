import { router } from "./api";
import { ConnectToDb } from "./config/db";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

ConnectToDb();
app.get("/", (req: any, res: any) => {
  res.send("Welcome to Phickayor's E-commerce Template site backend");
});
app.use(bodyParser.json());
app.use(cors());
app.use("/", router);

app.all("*", (req: any, res: any) => {
  res.send(`Route does not exist`);
});
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
