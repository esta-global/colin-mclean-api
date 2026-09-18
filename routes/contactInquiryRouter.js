const router = require("express").Router();
const contactInquiryController = require("../controllers/contactInquiryController");
const contactInquiryValidationSchema = require("../apiValidationSchemas/contactInquiryValidationSchema");
const joiSchemaValidation = require("../middlewares/joiSchemaValidation");
const jwtValidation = require("../middlewares/jwtValidation");

router.post(
  "/",
  joiSchemaValidation.validateBody(contactInquiryValidationSchema.create),
  contactInquiryController.create,
);

router.get(
  "/",
  jwtValidation.validateAdminToken,
  joiSchemaValidation.validateQuery(contactInquiryValidationSchema.findAll),
  contactInquiryController.findAll,
);

router.get(
  "/:id",
  jwtValidation.validateAdminToken,
  joiSchemaValidation.validateParams(contactInquiryValidationSchema.findById),
  contactInquiryController.findById,
);

router.put(
  "/:id",
  jwtValidation.validateAdminToken,
  joiSchemaValidation.validateParams(contactInquiryValidationSchema.findById),
  joiSchemaValidation.validateBody(contactInquiryValidationSchema.update),
  contactInquiryController.update,
);

router.delete(
  "/:id",
  jwtValidation.validateAdminToken,
  joiSchemaValidation.validateParams(contactInquiryValidationSchema.findById),
  contactInquiryController.delete,
);

module.exports = router;
