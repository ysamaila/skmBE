const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

//defining business details schema
const orderSchema = mongoose.Schema(
  {
    email: { type: String, required: true },
    phone: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    amount: { type: Number, required: true },
    price: { type: Number, required: true },
    country: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", orderSchema);
