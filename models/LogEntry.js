const mongoose = require("mongoose");

const requiredNumber = {
  type: Number,
  required: true,
};

const LogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },
    priceInsurance: {
      ...requiredNumber,
      // min: -90,
      // max: 90,
    },
    priceBase: {
      ...requiredNumber,
      // min: -180,
      // max: 180,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.models.Log || mongoose.model("Log", LogSchema);
