import express, { request, response } from "express";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";

const server = express();
const PORT = 8000;

server.use(cors());

server.post("/image", async (request, response) => {
  try {
    cloudinary.config({
      cloud_name: "dzcdabxry",
      api_key: "448173626726956",
      api_secret: "Rh4uWHpXGlVwRpCTsAIm2Vm4YDc", // Click 'View API Keys' above to copy your API secret
    });
    const uploadResult = await cloudinary.uploader.upload("./images/pizza.png");
    console.log(uploadResult);
    response.json("amjilttai");
  } catch (error) {
    console.log("cloudinary error", error);
  }
});
server.get("/", (request, response) => {
  response.json({
    success: "successfully",
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT} ajillaj ehellee`);
});
