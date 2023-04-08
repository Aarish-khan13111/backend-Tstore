const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require: true,
      maxlength: 32,
    },
    description: {
      type: String,
      trim: true,
      require: true,
      maxlength: 2000,
    },
    price: {
      type: Number,
      trim: true,
      require: true,
      maxlength: 32,
    },
    category: {
      type: mongoose.Schema.ObjectId,
      ref: "Category",
      trim: true,
      require: true,
    },
    stock: {
      type: Number,
    },
    sold: {
      type: Number,
      default: 0,
    },
    photo: {
      type: Buffer,
      contentType: String,
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("Product", productSchema);
