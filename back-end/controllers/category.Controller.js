import { Category } from "../model/Category.js";
import mongoose from "mongoose";

const createCategory = async (req, res) => {
  const result = await Category.create(req.body);

  res.json({
    success: true,
    data: result,
  });
};
const getAllCategory = async (req, res) => {
  try {
    const result = await Category.find();
    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const updateCategory = async (req, res) => {
  const result = await Category.findByIdAndUpdate({
    _id: "",
  });
  res.json({
    success: true,
    data: result,
  });
};
const deleteCategory = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid ID format" });
  }

  try {
    const result = await Category.findByIdAndDelete(id);

    if (!result) {
      return res
        .status(404)
        .json({ success: false, message: "Category not found" });
    }

    res.json({ success: true, data: result });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Internal Server Error",
        error: error.message,
      });
  }
};

export { getAllCategory, updateCategory, deleteCategory, createCategory };
