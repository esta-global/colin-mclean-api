const Joi = require("joi");
const { customCallback } = require("../helpers/joiHelper");

// create
module.exports.create = Joi.object({
  name: Joi.string().required().label("Name"),
  mobile: Joi.string()
    .regex(/^[6-9]\d{9}$/)
    .allow("")
    .messages({
      "string.pattern.base": `"Mobile" must be a valid Number`,
    })
    .label("Mobile"),
  email: Joi.string().email().allow("").label("Email"),

  profilePhoto: Joi.string().allow("").label("Profile Photo"),
  bio: Joi.string().allow("").label("Bio"),
  status: Joi.boolean().label("Status"),
});

// findAll
module.exports.findAll = Joi.object({
  page: Joi.string(),
  limit: Joi.string(),
  searchQuery: Joi.string(),
  status: Joi.string(),
});

// findById
module.exports.findById = Joi.object({
  id: Joi.custom(customCallback),
});

// update
module.exports.update = Joi.object({
  name: Joi.string().label("Name"),
  mobile: Joi.string()
    .regex(/^[6-9]\d{9}$/)
    .allow("")
    .messages({
      "string.pattern.base": `"Mobile" must be a valid Number`,
    })

    .label("Mobile"),
  email: Joi.string().email().allow("").label("Email"),

  profilePhoto: Joi.string().allow("").label("Profile Photo"),
  bio: Joi.string().allow("").label("Bio"),
  status: Joi.boolean().label("Status"),
});

// deleteMultiple
module.exports.deleteMultiple = Joi.object({
  ids: Joi.array().items(Joi.custom(customCallback)).required(),
});
