const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Vendor = require("../models/VendorModel");
const {
  signUpValidation,
  loginValidation,
} = require("../validations/VendorAuthValidation");

const vendorController = {};

vendorController.signup = async (req, res) => {
  try {
    const {
      shopName,
      logo,
      banner,
      name,
      email,
      phone,
      password,
      confirmPassword,
      city,
      location,
      postalCode,
      hasOwnDelivery,
    } = req.body;

    signUpValidation(req, res);

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    const newVendor = new Vendor({
      shopName,
      logo,
      banner,
      name,
      email,
      phone,
      password: hashPassword,
      city,
      location,
      postalCode,
      hasOwnDelivery,
    });

    const saveVendor = await newVendor.save();

    const token = jwt.sign({ id: saveVendor._id }, process.env.JWT_PASSWORD);
    return res.send({
      token,
      vendorInfo: {
        _id: saveVendor._id,
        shopName: saveVendor.shopName,
        logo: saveVendor.logo,
        banner: saveVendor.banner,
        name: saveVendor.name,
        email: saveVendor.email,
        phone: saveVendor.phone,
        city: saveVendor.city,
        location: saveVendor.location,
        postalCode: saveVendor.postalCode,
        hasOwnDelivery: saveVendor.hasOwnDelivery,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};

vendorController.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    loginValidation(req, res);

    const Vendor = await Vendor.findOne({ email });

    if (!Vendor) {
      return res
        .status(400)
        .json({ message: "No account with this email has been registers" });
    }
    const matchPassword = await bcrypt.compare(password, vendor.password);
    if (!matchPassword) {
      return res.status(400).json({ message: "password incerate" });
    }
    // eslint-disable-next-line no-underscore-dangle
    const token = jwt.sign({ id: vendor._id }, process.env.JWT_PASSWORD);
    return res.send({
      token,
      vendorInfo: {
        _id: vendor._id,
        shopName: vendor.shopName,
        logo: vendor.logo,
        banner: vendor.banner,
        name: vendor.name,
        email: vendor.email,
        phone: vendor.phone,
        city: vendor.city,
        location: vendor.location,
        postalCode: vendor.postalCode,
        hasOwnDelivery: vendor.hasOwnDelivery,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};

module.exports = vendorController;
