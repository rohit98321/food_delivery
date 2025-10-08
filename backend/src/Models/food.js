const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    video: {
      type: String,
      required: true,
    },
    poster: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    foodpartner: {
      type: mongoose.Schema.ObjectId,
      ref: "foodPartner",
    },
    price: {
      type: Number,
      required: true,
    },
    currency:{
      type:String,
      required:true
    }
  },
  { timestamps: true }
);

const foodModel = mongoose.model("food", foodSchema);
module.exports = foodModel;
