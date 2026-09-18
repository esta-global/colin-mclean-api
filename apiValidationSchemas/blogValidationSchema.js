const Joi = require("joi");
const { customCallback } = require("../helpers/joiHelper");

const contentType = Joi.string().valid("blog", "essay").default("blog").label("Type");
const optionalContentType = Joi.string().valid("blog", "essay").label("Type");

// create
module.exports.create = Joi.object({
  type: contentType,
  title: Joi.string().required().label("Title"),
  slug: Joi.string().required().label("Slug"),
  content: Joi.string().required().label("Content"),
  excerpt: Joi.string().allow("").label("excerpt"),
  coverImage: Joi.string().allow("").label("Image"),
  readingTime: Joi.string().allow("").label("Reading Time"),
  date: Joi.string().allow("").label("Date"),

  author: Joi.string().allow("", null).optional().label("Author"),
  category: Joi.string().required().label("Category"),

  tags: Joi.string().allow("").label("Tags"),

  schemaData: Joi.string().allow("").label("Schema Data"),

  metaTitle: Joi.string().allow("").label("Meta Title"),
  metaDescription: Joi.string().allow("").label("Meta Descriptions"),
  metaKeywords: Joi.string().allow("").label("Meta Keywords"),

  status: Joi.boolean().label("Status"),
  featured: Joi.boolean().label("Featured"),
});

// findAll
module.exports.findAll = Joi.object({
  page: Joi.string(),
  limit: Joi.string(),
  searchQuery: Joi.string(),
  slug: Joi.string(),
  status: Joi.string(),
  featured: Joi.string(),
  type: Joi.string().allow("", "All", "blog", "essay").label("Type"),
  sort: Joi.string().allow(""),
  date: Joi.string().allow(""),
  relatedBlog: Joi.string().allow(""),
  categorySlug: Joi.string().allow(""),
});

// findById
module.exports.findById = Joi.object({
  id: Joi.custom(customCallback),
});

// findBySlug
module.exports.findBySlug = Joi.object({
  slug: Joi.string().required().label("Slug"),
});

// update
module.exports.update = Joi.object({
  type: optionalContentType,
  title: Joi.string().label("Title"),
  slug: Joi.string().label("Slug"),
  content: Joi.string().label("Content"),
  excerpt: Joi.string().allow("").label("excerpt"),
  coverImage: Joi.string().allow("").label("Image"),
  readingTime: Joi.string().allow("").label("Reading Time"),
  date: Joi.string().allow("").label("Date"),

  author: Joi.string().allow("", null).optional().label("Author"),
  category: Joi.string().label("Category"),

  tags: Joi.string().allow("").label("Tags"),

  schemaData: Joi.string().allow("").label("Schema Data"),

  metaTitle: Joi.string().allow("").label("Meta Title"),
  metaDescription: Joi.string().allow("").label("Meta Descriptions"),
  metaKeywords: Joi.string().allow("").label("Meta Keywords"),

  status: Joi.boolean().label("Status"),
  featured: Joi.boolean().label("Featured"),
});

// deleteMultiple
module.exports.deleteMultiple = Joi.object({
  ids: Joi.array().items(Joi.custom(customCallback)).required(),
});
