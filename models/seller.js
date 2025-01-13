const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  grocery: {
    type: String,
    required: false,
  },
  dairyproducts: {
    type: String,
    required: false,
  },
  essentials: {
     type: String, 
     required: false ,
    },
  }
)

module.exports = mongoose.model("Product", productSchema);
