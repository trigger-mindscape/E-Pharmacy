const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Product = require("../models/ProductModel");
const User = require("../models/UserModel");
const {
  signUpValidation,
  loginValidation,
} = require("../validations/VendorAuthValidation");

const productController = {};

productController.addProduct = async (req, res) => {
  try {
    const { name, image, description, price, brand, category } = req.body;
    const { vendorId } = req;

    if (!name || !image || !description || !price || !brand || !category) {
      return res
        .status(400)
        .json({ message: "Not all field have been entered" });
    }

    const newProduct = new Product(req.body);

    const saveProduct = await newProduct.save();

    return res.send(saveProduct);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};

productController.getProduct = async (req, res) => {
  try {
    const { vendorId } = req.params;
    const products = await Product.find({
      vendorId,
    });

    return res.send(products);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};

module.exports = productController;
