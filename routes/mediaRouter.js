const router = require("express").Router();
const mediaController = require("../controllers/mediaController");
const mediaValidationSchema = require("../apiValidationSchemas/mediaValidationSchema");
const joiSchemaValidation = require("../middlewares/joiSchemaValidation");
const jwtValidation = require("../middlewares/jwtValidation");
const { upload } = require("../middlewares/fileUploading");

// create
router.post(
  "/",
  jwtValidation.validateAdminToken,
  upload.array("files", 10), // Store files in memory
  // joiSchemaValidation.validateBody(mediaValidationSchema.create),
  mediaController.create,
);

// create
router.post(
  "/byUser",
  jwtValidation.validateUserToken,
  upload.array("files", 10), // Store files in memory
  // joiSchemaValidation.validateBody(mediaValidationSchema.create),
  mediaController.create,
);

// create
router.post(
  "/byUser",
  jwtValidation.validateUserToken,
  upload.array("files", 10), // Store files in memory
  // joiSchemaValidation.validateBody(mediaValidationSchema.create),
  mediaController.create,
);

// findById
router.get(
  "/:id",
  joiSchemaValidation.validateParams(mediaValidationSchema.findById),
  // jwtValidation.validateAdminToken,
  mediaController.findById,
);

// findAll
router.get(
  "/",
  // jwtValidation.validateAdminToken,
  joiSchemaValidation.validateQuery(mediaValidationSchema.findAll),
  mediaController.findAll,
);

// update
router.put(
  "/:id",
  joiSchemaValidation.validateParams(mediaValidationSchema.findById),
  jwtValidation.validateAdminToken,
  joiSchemaValidation.validateBody(mediaValidationSchema.update),
  mediaController.update,
);

// delete
router.delete(
  "/:id",
  joiSchemaValidation.validateParams(mediaValidationSchema.findById),
  jwtValidation.validateAdminToken,
  joiSchemaValidation.validateBody(mediaValidationSchema.findById),
  mediaController.delete,
);

// deleteMultiple
router.delete(
  "/",
  jwtValidation.validateAdminToken,
  joiSchemaValidation.validateBody(mediaValidationSchema.delete),
  mediaController.delete,
);

module.exports = router;
