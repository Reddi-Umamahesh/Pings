import { Request, Response } from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

const express = require("express");
import dotenv from "dotenv";
import userRoute from '../routes/user.route'
import pingRoute from "../routes/ping.router";
import cors from "cors";

const cloudinary = require("cloudinary").v2;
const app = express();
dotenv.config();

const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOpts = {
  origin: "http://localhost:5173",
  METHODS: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  credentials : true 
};
app.use(cors(corsOpts))

mongoose
  .connect(process.env.MONGO_DB_URL as string|| "")
  .then(() => console.log("connected to database")
  )
  .catch((err) => console.log(err)
)
  


app.listen(port, () => {
  console.log("app is listening at port 3000");
});

app.use('/api/v1/user', userRoute);
app.use("/api/v1/ping", pingRoute);

app.get("/",(req: Request, res: Response) => {
    res.send("hello")
})
