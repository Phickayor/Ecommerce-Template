import { router } from "./api";
import { ConnectToDb } from "./config/db";
import bodyParser from "body-parser";
import express from "express";
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

ConnectToDb();
app.get("/", (req: any, res: any) => {
  res.send("Welcome to Shop thrift backend");
});
app.use(bodyParser.json());
app.use("/", router);

app.all("*", (req: any, res: any) => {
  res.send(`Route does not exist`);
});
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
