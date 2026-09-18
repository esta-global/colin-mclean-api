const Joi = require("joi");
const { customCallback } = require("../helpers/joiHelper");

// create
module.exports.create = Joi.object({
  mediaName: Joi.string().required().label("Media Name"),
  mediaType: Joi.string().required().label("Media Type"),
  status: Joi.boolean().required().label("Status"),
});

// findAll
module.exports.findAll = Joi.object({
  page: Joi.string(),
  limit: Joi.string(),
  searchQuery: Joi.string(),
  fileType: Joi.string(),
  status: Joi.string().valid("ALL", "", "true", "false"),
});

// findById
module.exports.findById = Joi.object({
  id: Joi.custom(customCallback),
});

// update
module.exports.update = Joi.object({
  mediaName: Joi.string().label("Media Name"),
  mediaType: Joi.string().label("Media Type"),
  status: Joi.boolean().label("Status"),
});

// deleteMultiple
module.exports.deleteMultiple = Joi.object({
  files: Joi.array().items(Joi.string()).required(),
});

// delete
module.exports.delete = Joi.object({
  filename: Joi.string().required(),
});
