const mongoose = require("mongoose");

const stringField = {
  type: String,
  trim: true,
  default: "",
};

const perspectiveItemSchema = new mongoose.Schema(
  {
    title: stringField,
    category: stringField,
    href: stringField,
  },
  { _id: false }
);

const lectureItemSchema = new mongoose.Schema(
  {
    number: stringField,
    title: stringField,
    description: stringField,
    image: stringField,
    href: stringField,
  },
  { _id: false }
);

const topicItemSchema = new mongoose.Schema(
  {
    number: stringField,
    title: stringField,
    description: stringField,
    image: stringField,
    href: stringField,
  },
  { _id: false }
);

const essayItemSchema = new mongoose.Schema(
  {
    title: stringField,
    paragraph: stringField,
    category: stringField,
    date: stringField,
    readingTime: stringField,
    image: stringField,
    href: stringField,
  },
  { _id: false }
);

const heroSectionSchema = new mongoose.Schema(
  {
    eyebrow: { ...stringField, default: "Investor · Writer · Lecturer" },
    title: { ...stringField, default: "Thoughts on finance, business and public policy." },
    summary: { ...stringField, default: "Colin McLean's insights and perspectives on economics, business, behaviour and public policy." },
    image: { ...stringField, default: "/images/hero.webp" },
    primaryButtonText: { ...stringField, default: "Read latest thinking" },
    primaryButtonLink: { ...stringField, default: "/writing" },
    secondaryButtonText: { ...stringField, default: "About Colin" },
    secondaryButtonLink: { ...stringField, default: "/about" },
  },
  { _id: false }
);

const perspectivesSectionSchema = new mongoose.Schema(
  {
    eyebrow: { ...stringField, default: "Point of view" },
    title: { ...stringField, default: "Perspectives" },
    description: { ...stringField, default: "Thought leadership is more than subjects and credentials. It is the perspective brought to the questions that matter." },
    items: [perspectiveItemSchema],
  },
  { _id: false }
);

const topicsSectionSchema = new mongoose.Schema(
  {
    eyebrow: { ...stringField, default: "Focus areas" },
    title: { ...stringField, default: "Key Topics" },
    description: { ...stringField, default: "Explore core subjects across markets, business, public policy and society." },
    items: [topicItemSchema],
  },
  { _id: false }
);

const aboutPreviewSectionSchema = new mongoose.Schema(
  {
    heading: { ...stringField, default: "About" },
    role: { ...stringField, default: "Investor. Writer. Guest Lecturer." },
    paragraphs: [{ type: String, trim: true }],
    credential: { ...stringField, default: "Recently retired from Board of Public Health Scotland. Writes for The Herald." },
    image: { ...stringField, default: "/images/portrait.png" },
    buttonText: { ...stringField, default: "More about Colin" },
    buttonLink: { ...stringField, default: "/about" },
  },
  { _id: false }
);

const essaysPreviewSectionSchema = new mongoose.Schema(
  {
    eyebrow: { ...stringField, default: "Recent blogs" },
    title: { ...stringField, default: "Blogs" },
    description: { ...stringField, default: "Recent articles, insights and commentary on markets, business, behaviour and public policy." },
    items: [essayItemSchema],
  },
  { _id: false }
);

const lecturesSectionSchema = new mongoose.Schema(
  {
    eyebrow: { ...stringField, default: "Lectures & speaking" },
    title: { ...stringField, default: "Lectures" },
    description: { ...stringField, default: "Ideas brought into practice through talks and presentations on behavioural finance, investment and current economic topics." },
    items: [lectureItemSchema],
  },
  { _id: false }
);

const seoSchema = new mongoose.Schema(
  {
    metaTitle: stringField,
    metaDescription: stringField,
    keywords: [{ type: String, trim: true }],
  },
  { _id: false }
);

const homepageSchema = new mongoose.Schema(
  {
    heroSection: heroSectionSchema,
    perspectivesSection: perspectivesSectionSchema,
    topicsSection: topicsSectionSchema,
    aboutPreviewSection: aboutPreviewSectionSchema,
    essaysPreviewSection: essaysPreviewSectionSchema,
    lecturesSection: lecturesSectionSchema,
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

module.exports = mongoose.model("homepage", homepageSchema);
