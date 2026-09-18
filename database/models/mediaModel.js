const mongoose = require("mongoose");

const modelSchema = new mongoose.Schema(
  {
    filename: {
      type: String,
      trim: true,
    },
    mimetype: {
      type: String,
      trim: true,
    },
    size: {
      type: String,
    },
    status: {
      type: Boolean,
      default: true,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  {
    timestamps: true,
    toObject: {
      transform: (doc, ret, option) => {
        delete ret.__v;
        return ret;
      },
    },
  },
);

module.exports = mongoose.model("media", modelSchema);
