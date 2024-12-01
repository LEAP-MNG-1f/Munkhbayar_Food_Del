import { Order } from "../model/order.js";

const createOrder = async (req, res) => {
  const result = await Order.create({
    orderNumber: 1,
    totalPrice: "25000",
    userId: "6747bdf75564bf8f10a1f05b",
    foodIds: "6747c2fd74b6d0e7da5bb123",
    khoroo: "sacdca",
    Apartment: "csadca",
    district: "csadcas",
  });

  res.json({
    success: true,
    data: result,
  });
};

const getAllOrders = async (req, res) => {
  const result = await Order.find().populate("userId").populate("foodIds");
  console.log(result);

  res.json({
    success: true,
    data: result,
  });
};

export { createOrder, getAllOrders };
