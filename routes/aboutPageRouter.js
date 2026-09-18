const router = require("express").Router();
const aboutPageController = require("../controllers/aboutPageController");
const aboutPageValidationSchema = require("../apiValidationSchemas/aboutPageValidationSchema");
const joiSchemaValidation = require("../middlewares/joiSchemaValidation");
const jwtValidation = require("../middlewares/jwtValidation");

// create
router.post(
  "/",
  jwtValidation.validateAdminToken,
  joiSchemaValidation.validateBody(aboutPageValidationSchema.create),
  aboutPageController.create,
);

// findOne
router.get("/", aboutPageController.findOne);

// update
router.put(
  "/",
  jwtValidation.validateAdminToken,
  joiSchemaValidation.validateBody(aboutPageValidationSchema.update),
  aboutPageController.update,
);

module.exports = router;
