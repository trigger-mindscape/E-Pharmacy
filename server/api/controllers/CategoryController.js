const Category = require("../models/CategoryModel");
const {
  signUpValidation,
  loginValidation,
} = require("../validations/VendorAuthValidation");

const categoryController = {};

categoryController.addCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const { vendorId } = req;

    if (!name) {
      return res.status(400).json({ message: "Name field have been entered" });
    }

    const newCategory = new Category({ name, vendorId });

    const saveCategory = await newCategory.save();

    return res.send(saveCategory);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};

categoryController.getCategory = async (req, res) => {
  try {
    const { vendorId } = req.params;
    const catagories = await Category.find({
      vendorId,
    });

    return res.send(catagories);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};

module.exports = categoryController;
