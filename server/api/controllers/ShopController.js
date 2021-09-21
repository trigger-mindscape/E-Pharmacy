const VendorController = {};

VendorController.getAllShop = async (req, res) => {
  try {
    const allShop = await Vendor.find({
    //   vendorId,
    });

    return res.send(allShop);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};

VendorController.getSingleShop = async (req, res) => {
  try {
    const { vendorId } = req.params;
    const singleShop = await Vendor.find({
      vendorId,
    });

    return res.send(singleShop);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};

module.exports = VendorController;
