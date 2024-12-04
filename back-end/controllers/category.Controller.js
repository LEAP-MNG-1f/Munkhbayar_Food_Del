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
  try {
    const { id } = req.params; // Get the ID from the request parameters
    const updateData = req.body; // Get the data to update from the request body

    const result = await Category.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true } // Options to return the updated document and run validation
    );

    if (!result) {
      return res
        .status(404)
        .json({ success: false, message: "Category not found" });
    }

    res.json({ success: true, data: result });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
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
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export { getAllCategory, updateCategory, deleteCategory, createCategory };
