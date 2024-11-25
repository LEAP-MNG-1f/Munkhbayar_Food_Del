import mongoose from "mongoose";

const roleEnum = {
  values: ["admin", "user"],
};

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  phoneNumber: {
    type: Number,
    require: true,
  },
  role: {
    type: String,
    enum: roleEnum,
    default: "user",
  },
});

export const User = mongoose.model("User", userSchema);
