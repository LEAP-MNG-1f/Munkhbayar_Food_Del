import express from "express";
import cors from "cors";
// import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import connectDb from "./connectDB.js";
import { ObjectId } from "mongodb";
import userRouter from "./routes/userRoute.js";

dotenv.config();

const server = express();
const PORT = 8000;

server.use(express.json());
server.use(cors());

server.use("/api", userRouter);

// server.post("/image", async (request, response) => {
//   try {
//     cloudinary.config({
//       cloud_name: "dzcdabxry",
//       api_key: "448173626726956",
//       api_secret: "Rh4uWHpXGlVwRpCTsAIm2Vm4YDc", // Click 'View API Keys' above to copy your API secret
//     });
//     const uploadResult = await cloudinary.uploader.upload("./images/pizza.png");
//     console.log(uploadResult);
//     response.json("amjilttai");
//   } catch (error) {
//     console.log("cloudinary error", error);
//   }
// });
// server.get("/", (request, response) => {
//   response.json({
//     success: "successfully",
//   });
// });

// server.get("/", async (request, response) => {
//   const db = await connectDb();

//   let collection = db.collection("product");
//   let result = await collection.find().toArray();
//   response.json({
//     success: true,
//     result: result,
//   });
// });
// server.post("/create", async (request, response) => {
//   const db = await connectDb();

//   let collection = db.collection("product");
//   let result = await collection.insertOne({
//     name: "huushuur",
//     email: "monhbayr@gmail.com",
//     price: "190000",
//   });
//   response.json({
//     success: true,
//     data: result,
//   });
// });
// server.put("/update", async (req, response) => {
//   const db = await connectDb();

//   let collection = db.collection("users");
//   let result = await collection.findOneAndUpdate(
//     {
//       _id: new ObjectId("67400203726b16fc4e9b2006"),
//     },
//     {
//       $set: { price: "8800", date: new Date() },
//     }
//   );

//   response.json({
//     succes: true,
//     data: result,
//   });
// });
// server.delete("/delete", async (req, res) => {
//   const db = await connectDb();

//   let collection = db.collection("users");
//   let result = await collection.deleteOne({
//     _id: new ObjectId("67400203726b16fc4e9b2006"),
//   });
//   res.json({
//     succes: true,
//     data: result,
//   });
// });
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT} ajillaj ehellee`);
});
