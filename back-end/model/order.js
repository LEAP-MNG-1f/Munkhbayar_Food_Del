import mongoose from "mongoose";

// const roleEnum = {
//   values: ["admin", "user"],
// };

const orderSchema = new mongoose.Schema({
  orderNumber: {
    type: Number,
    require: true,
  },
  totalPrice: {
    type: String,
    require: true,
  },
  customer: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    require: true,
  },
});

export const Order = mongoose.model("Order", orderSchema);
