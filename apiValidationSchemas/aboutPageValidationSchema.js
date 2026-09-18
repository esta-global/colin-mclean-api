const Joi = require("joi");

const stringField = (label) => Joi.string().allow("", null).label(label);

const seoSchema = Joi.object({
  metaTitle: stringField("Meta Title"),
  metaDescription: stringField("Meta Description"),
  keywords: Joi.array().items(stringField("SEO Keyword")).label("SEO Keywords"),
}).allow(null);

const aboutPageSchema = Joi.object({
  title: stringField("Title"),
  role: stringField("Role"),
  portraitImage: stringField("Portrait Image"),
  biography: Joi.array().items(stringField("Biography Paragraph")).label("Biography"),
  seo: seoSchema,
});

module.exports.create = aboutPageSchema;
module.exports.update = aboutPageSchema;
