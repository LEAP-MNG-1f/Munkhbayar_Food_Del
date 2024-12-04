import express from "express";

import {
  createCategory,
  getAllCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/category.Controller.js";

const categoryRouter = express.Router();

categoryRouter.get("/categories", getAllCategory);
categoryRouter.post("/categories", createCategory);
categoryRouter.put("/categories/:id", updateCategory);
categoryRouter.delete("/categories/:id", deleteCategory);

export { categoryRouter };
