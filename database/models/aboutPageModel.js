const mongoose = require("mongoose");

const stringField = {
  type: String,
  trim: true,
  default: "",
};

const seoSchema = new mongoose.Schema(
  {
    metaTitle: stringField,
    metaDescription: stringField,
    keywords: [{ type: String, trim: true }],
  },
  { _id: false }
);

const aboutPageSchema = new mongoose.Schema(
  {
    title: { ...stringField, default: "Colin McLean" },
    role: { ...stringField, default: "Investor. Writer. Guest Lecturer." },
    portraitImage: { ...stringField, default: "/images/portrait.png" },
    biography: [{ type: String, trim: true }],
    seo: seoSchema,
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

module.exports = mongoose.model("aboutPage", aboutPageSchema);
