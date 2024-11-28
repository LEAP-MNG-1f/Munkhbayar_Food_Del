import { User } from "../model/user.js";

const createUser = async (req, res) => {
  const result = await User.create({
    name: "MunkhbayarMBP",
    email: "monhbayr24@yahoo.com",
    password: " monhbayr12345",
    phoneNumber: 99334466,
  });

  res.json({
    success: true,
    data: result,
  });
};

const getAllUsers = async (req, res) => {
  const result = await User.find();

  res.json({
    success: true,
    data: result,
  });
};

export { createUser, getAllUsers };
