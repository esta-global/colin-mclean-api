const Joi = require("joi");

const stringField = (label) => Joi.string().allow("", null).label(label);

const heroSectionSchema = Joi.object({
  eyebrow: stringField("Hero Eyebrow"),
  title: stringField("Hero Title"),
  summary: stringField("Hero Summary"),
  image: stringField("Hero Image"),
  primaryButtonText: stringField("Primary Button Text"),
  primaryButtonLink: stringField("Primary Button Link"),
  secondaryButtonText: stringField("Secondary Button Text"),
  secondaryButtonLink: stringField("Secondary Button Link"),
}).allow(null);

const perspectivesSectionSchema = Joi.object({
  eyebrow: stringField("Perspectives Eyebrow"),
  title: stringField("Perspectives Title"),
  description: stringField("Perspectives Description"),
  items: Joi.array()
    .items(
      Joi.object({
        title: stringField("Title"),
        category: stringField("Category"),
        href: stringField("Link"),
      })
    )
    .label("Perspective Items"),
}).allow(null);

const topicItemSchema = Joi.object({
  number: stringField("Number"),
  title: stringField("Title"),
  description: stringField("Description"),
  image: stringField("Image"),
  href: stringField("Link"),
});

const essayItemSchema = Joi.object({
  title: stringField("Title"),
  paragraph: stringField("Paragraph"),
  category: stringField("Category"),
  date: stringField("Date"),
  readingTime: stringField("Reading Time"),
  image: stringField("Image"),
  href: stringField("Link"),
});

const topicsSectionSchema = Joi.object({
  eyebrow: stringField("Topics Eyebrow"),
  title: stringField("Topics Title"),
  description: stringField("Topics Description"),
  items: Joi.array().items(topicItemSchema).label("Topic Items"),
}).allow(null);

const aboutPreviewSectionSchema = Joi.object({
  heading: stringField("About Heading"),
  role: stringField("About Role"),
  paragraphs: Joi.array().items(stringField("Paragraph")).label("About Paragraphs"),
  credential: stringField("Credential"),
  image: stringField("About Image"),
  buttonText: stringField("Button Text"),
  buttonLink: stringField("Button Link"),
}).allow(null);

const essaysPreviewSectionSchema = Joi.object({
  eyebrow: stringField("Essays Eyebrow"),
  title: stringField("Essays Title"),
  description: stringField("Essays Description"),
  items: Joi.array().items(essayItemSchema).label("Essay Items"),
}).allow(null);

const lecturesSectionSchema = Joi.object({
  eyebrow: stringField("Lectures Eyebrow"),
  title: stringField("Lectures Title"),
  description: stringField("Lectures Description"),
  items: Joi.array()
    .items(
      Joi.object({
        number: stringField("Number"),
        title: stringField("Title"),
        description: stringField("Description"),
        image: stringField("Image"),
        href: stringField("Link"),
      })
    )
    .label("Lecture Items"),
}).allow(null);

const seoSchema = Joi.object({
  metaTitle: stringField("Meta Title"),
  metaDescription: stringField("Meta Description"),
  keywords: Joi.array().items(stringField("SEO Keyword")).label("SEO Keywords"),
}).allow(null);

module.exports.create = Joi.object({
  heroSection: heroSectionSchema,
  perspectivesSection: perspectivesSectionSchema,
  topicsSection: topicsSectionSchema,
  aboutPreviewSection: aboutPreviewSectionSchema,
  essaysPreviewSection: essaysPreviewSectionSchema,
  lecturesSection: lecturesSectionSchema,
  seo: seoSchema,
});
