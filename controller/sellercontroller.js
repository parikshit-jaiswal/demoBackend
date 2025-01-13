
const Product = require("../models/seller");

exports.addproducts = async (req, res) => {
  try {
    const {grocery, dairyproducts, essentials} = req.body;
    const newproducts = new Product({ grocery,dairyproducts,essentials });
    await newproducts.save();
    res.status(201).json({ message: "products added successfully!", data: newproducts });
  } catch (err) {
    res.status(500).json({ message: "Error adding products", error: err.message });
  }
};


exports.getproducts = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: "Error fetching product", error: err.message });
  }
};



