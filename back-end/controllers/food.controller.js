import { Food } from "../model/food.js";

const createFood = async (req, res) => {
  const result = await Food.create({
    name: "Cake",
    image:
      "https://www.ucsf.edu/sites/default/files/2019-09/vegetables-cooking-food.jpg",
    ingredient: "tums",
    price: 5000,
    categoryId: "6747c2edc2d7bc2253bf4ea6",
  });

  res.json({
    success: true,
    data: result,
  });
};

const getAllFoods = async (req, res) => {
  const result = await Food.find().populate("categoryId");

  res.json({
    success: true,
    data: result,
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
