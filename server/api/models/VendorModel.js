const mongoose = require('mongoose');

const { Schema } = mongoose;

const vendorSchema = new Schema(
  {
    shopName: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    banner: {
      type: String,
      required: true,
    },
    name: {
        type:String,
        required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    
    city: {
        type:String,
        required: true,
    },
    location: {
        type:String,
        required: true,
    },
    postalCode: {
        type:Number,
        required: true,
    },
    rating: {
        type:Number,
        default:0
    },
    totalReview: {
        type:Number,
        default:0
    },
    hasOwnDelivery: {
        type:Boolean,
        default:false,
        required: true
    },
    isDeliveryFree: {
        type:Boolean,
        default:false
    },
  },
  { timestamps: true },
);

const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = Vendor;
