const Joi = require("joi");
const { customCallback } = require("../helpers/joiHelper");

const STATUSES = ["New", "In Review", "Resolved"];

module.exports.create = Joi.object({
  name: Joi.string().trim().required().label("Name"),
  email: Joi.string().email().trim().required().label("Email Address"),
  phone: Joi.string().allow("", null).trim().label("Phone Number"),
  message: Joi.string().trim().required().label("Message"),
});

module.exports.update = Joi.object({
  name: Joi.string().trim().label("Name"),
  email: Joi.string().email().trim().label("Email Address"),
  phone: Joi.string().allow("", null).trim().label("Phone Number"),
  message: Joi.string().trim().label("Message"),
  status: Joi.string().valid(...STATUSES).label("Status"),
  adminNotes: Joi.string().allow("", null).trim().label("Admin Notes"),
});

module.exports.findAll = Joi.object({
  page: Joi.number().integer().min(1),
  limit: Joi.number().integer().min(1).max(100),
  search: Joi.string().allow("").trim(),
  searchQuery: Joi.string().allow("").trim(),
  status: Joi.string().valid(...STATUSES, "ALL", "").allow(""),
  sort: Joi.string().valid("newest", "oldest", "").allow(""),
});

module.exports.findById = Joi.object({
  id: Joi.custom(customCallback),
});
