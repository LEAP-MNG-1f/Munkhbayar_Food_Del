import mongoose from "mongoose";

const roleEnum = {
  values: ["admin", "user"],
};

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  
});
