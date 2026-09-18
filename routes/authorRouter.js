const router = require("express").Router();
const authorController = require("../controllers/authorController");
const authorValidtionSchema = require("../apiValidationSchemas/authorValidtionSchema");
const joiSchemaValidation = require("../middlewares/joiSchemaValidation");
const jwtValidation = require("../middlewares/jwtValidation");

// create
router.post(
  "/",
  jwtValidation.validateAdminToken,
  joiSchemaValidation.validateBody(authorValidtionSchema.create),
  authorController.create
);

// findById
router.get(
  "/:id",
  joiSchemaValidation.validateParams(authorValidtionSchema.findById),
  jwtValidation.validateAdminToken,
  authorController.findById
);

// findAll
router.get(
  "/",
  joiSchemaValidation.validateQuery(authorValidtionSchema.findAll),
  jwtValidation.validateAdminToken,
  authorController.findAll
);

// update
router.put(
  "/:id",
  joiSchemaValidation.validateParams(authorValidtionSchema.findById),
  jwtValidation.validateAdminToken,
  joiSchemaValidation.validateBody(authorValidtionSchema.update),
  authorController.update
);

// delete
router.delete(
  "/:id",
  joiSchemaValidation.validateParams(authorValidtionSchema.findById),
  jwtValidation.validateAdminToken,
  joiSchemaValidation.validateBody(authorValidtionSchema.findById),
  authorController.delete
);

// deleteMultiple
router.delete(
  "/",
  jwtValidation.validateAdminToken,
  joiSchemaValidation.validateBody(authorValidtionSchema.deleteMultiple),
  authorController.deleteMultiple
);

module.exports = router;
