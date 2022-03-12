const mongoose = require("mongoose");
//const { Schema } = mongoose;

const Schema = mongoose.Schema;

const requiredNumber = {
  type: Number,
  required: true,
};

const logEntrySchema = new Schema(
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

//const LogEntry = mongoose.model("LogEntry", logEntrySchema);
module.exports =
  mongoose.models.LogEntry || mongoose.model("LogEntry", UserSchema);
