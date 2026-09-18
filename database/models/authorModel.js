const mongoose = require("mongoose");
const modelSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true },
    mobile: { type: String, trim: true },
    email: { type: String, trim: true },

    profilePhoto: { type: String, trim: true },
    bio: { type: String, trim: true },

    status: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    toObject: {
      transform: (doc, ret, option) => {
        delete ret.__v;
        delete ret.isDeleted;
        return ret;
      },
    },
  }
);

module.exports = mongoose.model("author", modelSchema);
