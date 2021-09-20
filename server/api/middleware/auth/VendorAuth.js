const Vendor = require("../../models/VendorModel");

const adminMiddleware = {};

const vendorAuth = async (req, res, next) => {
  try {
    const { userId } = req;

    const vendor = await Vendor.findOne(
      {
        _id: userId,
      }
    );

    if (!vendor) {
      return res.status(401).json({ message: 'Only Vendors are allowed' });
    }
    req.vendorId = userId;
    return next();
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};

module.exports = vendorAuth;
