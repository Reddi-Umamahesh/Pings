import { Request, Response } from "express";
import mongoose from "mongoose";

const express = require("express");
import dotenv from "dotenv";
const app = express();
dotenv.config();
const port = 3000;

mongoose
  .connect(process.env.MONGO_DB_URL as string|| "")
  .then(() => console.log("connected to database")
  )
  .catch((err) => console.log(err)
)
  


app.listen(port, () => {
  console.log("app is listening at port 3000");
});

app.get("/",(req: Request, res: Response) => {
    res.send("hello")
})
