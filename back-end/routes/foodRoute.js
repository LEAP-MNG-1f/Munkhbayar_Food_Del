import express from "express";
import {
  createFood,
  getAllFoods,
  deleteFood,
  updateFood,
} from "../controllers/food.controller.js";

const foodRouter = express.Router();

foodRouter.get("/foods", getAllFoods);
foodRouter.post("foods", createFood);
foodRouter.delete("foods", deleteFood);
foodRouter.put("/foods", updateFood);

export { foodRouter };
