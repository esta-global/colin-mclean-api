const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["blog", "essay"],
      default: "blog",
      required: true,
      index: true,
    },
    title: { type: String, required: true, trim: true },
    slug: { type: String, unique: true, index: true },
    content: { type: String, required: true },
    excerpt: { type: String, trim: true },
    coverImage: { type: String, default: "" },
    readingTime: { type: String, default: "", trim: true },
    date: { type: String, default: "", trim: true },

    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "author",
      required: false,
      default: null,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "blogCategory",
      required: true,
    },

    tags: { type: String, trim: true },

    schemaData: { type: String, default: "", trim: true },

    metaTitle: { type: String, default: "", trim: true },
    metaDescription: { type: String, default: "", trim: true },
    metaKeywords: { type: String, default: "", trim: true },

    status: { type: Boolean, default: false },
    featured: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("blog", blogSchema);
