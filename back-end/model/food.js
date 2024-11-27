import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  ingeredient: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
  
});
