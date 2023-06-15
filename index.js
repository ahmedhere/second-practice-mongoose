// I am going to work on a product sections of a shopApp with the mongodb using mongoose
const mongoose = require("mongoose");
const Product = require("./config/ProductSchema");
mongoose
  .connect("mongodb://127.0.0.1:27017/ShopApp")
  .then(() => {
    console.log("Database Connected....");
  })
  .catch((err) => {
    console.log(err);
  });

const bike = new Product({
  name: "Universal Bike",
  price: 1000,
});

bike
  .save()
  .then((data) => {
    console.log("Item added");
    console.log(data);
  })
  .catch((err) => console.log(err));
