import { Food } from "../model/food.js";

const createFood = async (req, res) => {
  const result = await Food.create({
    name: "cake",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXx7wMoMXa6NSuAeFVoJfVTHNm2MfO9NlC1w&s",
    ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр  ",
    price: 5000,
    categoryId: "",
  });

  res.json({
    success: true,
    data: result,
  });
};

const getAllFoods = async (req, res) => {
  const result = await Order.find().populate("Food");
  console.log(result);
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
