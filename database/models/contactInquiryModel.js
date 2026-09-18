const mongoose = require("mongoose");

const contactInquirySchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, required: true },
    email: { type: String, trim: true, lowercase: true, required: true },
    phone: { type: String, trim: true, default: "" },
    message: { type: String, trim: true, required: true },
    status: {
      type: String,
      enum: ["New", "In Review", "Resolved"],
      default: "New",
    },
    adminNotes: { type: String, trim: true, default: "" },
  },
  {
    timestamps: true,
    toObject: {
      transform: (doc, ret) => {
        delete ret.__v;
        return ret;
      },
    },
  }
);

module.exports = mongoose.model("contactInquiry", contactInquirySchema);
