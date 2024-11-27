import { Food } from "../model/food.js";

const createFood = async (req, res) => {
  const result = await Food.create({
    name: "dessert 8",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXx7wMoMXa6NSuAeFVoJfVTHNm2MfO9NlC1w&s",
    ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр  ",
    price: 25000,
    categoryId: "674421b0bda2639d243e3cdf",
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

export { createFood, getAllFoods };
