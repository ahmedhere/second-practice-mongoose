const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
  },
  PostedOn: {
    type: Date,
    default: Date.now,
  },
});
const Product = new mongoose.model("Product", productsSchema);

module.exports = Product;
