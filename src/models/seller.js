import mongoose from 'mongoose';

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

exports default {productSchema};
