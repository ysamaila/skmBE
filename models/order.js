const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

//defining business details schema
const orderSchema = mongoose.Schema(
  {
    email: { type: String, required: true },
    phone: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: String, required: false },
    city: { type: String, required: false },
    state: { type: String, required: false },
    amount: { type: Number, required: false },
    price: { type: Number, required: false },
    country: { type: String, required: false },
    totalPaid: { type: Number, required: false },
    location: { type: String, required: false },
    item: { type: String, required: true },
    image: { type: String, required: false },
    method: { type: String, required: true },
    apartment: { type: String, required: false },
    company: { type: String, required: false },
    transactionRef: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", orderSchema);
