import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/userRoute.js";
import { orderRouter } from "./routes/orderRoute.js";
import { foodRouter } from "./routes/foodRoute.js";
import { categoryRouter } from "./routes/categoryRoute.js";

mongoose.connect(
  "mongodb+srv://monhbayr2400:M1n11muu@cluster0.9rtw4.mongodb.net/Food_Delivery"
);

const server = express();
const PORT = 4000;

server.use(cors());

server.use("/api", userRouter);
server.use("/api", orderRouter);
server.use("/api", foodRouter);
server.use("/api", categoryRouter);

// server.post("/create", async (req, res) => {
//   const result = await animeModel.create({
//     name: "naruto",
//     year: 1998,
//   });

//   res.json({
//     success: true,
//     data: result,
//   });
// });

// server.delete("/create", async (req, res) => {
//   const result = await animeModel.deleteOne({
//     _id: "6743f423382139b29a5f40fe",
//   });
//   res.json({
//     success: true,
//     data: result,
//   });
// });

server.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
