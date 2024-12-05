import { Food } from "../model/food.js";
import groupBy from "lodash";

const createFood = async (req, res) => {
  const result = await Food.create({
    name: "Цуйван",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Cujwan.JPG/1200px-Cujwan.JPG",
    ingredient: "Давс, .... , .... , ...., ",
    price: 12000,
    categoryId: "67511af671257d726c433504",
  });

  res.json({
    success: true,
    data: result,
  });
};

const getAllFoods = async (req, res) => {
  const result = await Food.find().populate("categoryId");
  console.log("result:", result);
  const groupedData = groupBy(result, (food) => food.categoryId.name);
  console.log("grouped data:", groupedData);

  res.json({
    success: true,
    data: groupedData,
  });
};

const deleteFood = async (request, response) => {
  const result = await Food.findByIdAndRemove({
    _id: "",
  });

  response.json({
    success: true,
    data: result,
  });
};
const updateFood = async (request, response) => {
  const result = await Food.findByIdAndUpdate({
    _id: "",
  });

  response.json({
    success: true,
    data: result,
  });
};

export { createFood, getAllFoods, deleteFood, updateFood };
