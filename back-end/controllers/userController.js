import { User } from "../model/user.js";

const createUser = async (req, res) => {
  const result = await User.create({
    name: "Munkhbayar",
    email: "monhbayr2400@gmail.com",
    password: " monhbayr123",
    phoneNumber: 99334455,
  });

  console.log(result);

  res.json({
    success: true,
    data: result,
  });
};

const getAllUsers = async (req, res) => {
  const result = await User.find();
  console.log(result);
  res.json({
    success: true,
    data: result,
  });
};

export { createUser, getAllUsers };
