import { Food } from "../model/food.js";
import groupBy from "lodash";
const createFood = async (req, res) => {
  const result = await Food.create({
    name: "Хуушуур",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCIJ8IqTiu0CKwheN5TfJ-nHA5YJtF_J7xvg&s",
    ingredient: "dadada",
    price: 10000,
    categoryId: "67488bdcfbf8dda01af866ce",
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
