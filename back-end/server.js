import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { userRouter } from "./routes/userRoute.js";
import { orderRouter } from "./routes/orderRoute.js";
import { foodRouter } from "./routes/foodRoute.js";
import { categoryRouter } from "./routes/categoryRoute.js";
import dotenv from "dotenv";

dotenv.config();
mongoose.connect(process.env.MongoDB_Data);

const server = express();
const PORT = 4000;

server.use(cors());
server.use(bodyParser.json());

server.use("/api", userRouter);
server.use("/api", orderRouter);
server.use("/api", foodRouter);
server.use("/api", categoryRouter);

server.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
