import mongoose from "mongoose";

// const roleEnum = {
//   values: ["admin", "user"],
// };
const processEnum = {
  values: ["Delivered", "Waiting", "Progress", "Active"],
};

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    require: true,
  },
  orderNumber: {
    type: Number,
    require: true,
  },
  foodIds: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Food",
    },
  ],

  totalPrice: {
    type: String,
    require: true,
  },
  process: {
    type: String,
    enum: processEnum,
    default: "Progress",
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  district: {
    type: String,
    require: true,
  },
  khoroo: {
    type: String,
    require: true,
  },
  Apartment: {
    type: String,
    require: true,
  },
});

export const Order = mongoose.model("Order", orderSchema);
