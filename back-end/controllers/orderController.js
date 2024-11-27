import { Order } from "../model/index.js";

const createOrder = async (req, res) => {
  const result = await Order.create({
    orderNumber: 1,
    totalPrice: "25000",
    customer: "6744046f41bb97b5eaf57d40",
  });

  console.log(result);

  res.json({
    success: true,
    data: result,
  });
};

const getAllOrders = async (req, res) => {
  const result = await Order.find().populate("customer");
  console.log(result);
  res.json({
    success: true,
    data: result,
  });
};

export { createOrder, getAllOrders };
