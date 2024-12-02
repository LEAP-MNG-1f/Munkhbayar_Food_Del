import { Category } from "../model/Category.js";
const createCategory = async (req, res) => {
  const result = await Category.create(req.body);
  res.json({
    success: true,
    data: result,
  });
};
const getAllCategory = async (req, res) => {
  const result = await Category.find();

  res.json({
    success: true,
    data: result,
  });
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
  const result = await Category.findByIdAndRemove({
    _id: "",
  });
  res.json({
    success: true,
    data: result,
  });
};
export { getAllCategory, updateCategory, deleteCategory, createCategory };
