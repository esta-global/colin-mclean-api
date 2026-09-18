const router = require("express").Router();
const blogCategoryController = require("../controllers/blogCategoryController");
const blogCategoryValidationSchema = require("../apiValidationSchemas/blogCategoryValidationSchema");
const joiSchemaValidation = require("../middlewares/joiSchemaValidation");
const jwtValidation = require("../middlewares/jwtValidation");

// create
router.post(
  "/",
  jwtValidation.validateAdminToken,
  joiSchemaValidation.validateBody(blogCategoryValidationSchema.create),
  blogCategoryController.create
);

// findBySlug
router.get("/findBySlug/:slug", blogCategoryController.findBySlug);

// findById
router.get(
  "/:id",
  joiSchemaValidation.validateParams(blogCategoryValidationSchema.findById),
  blogCategoryController.findById
);

// findAll
router.get(
  "/",
  joiSchemaValidation.validateQuery(blogCategoryValidationSchema.findAll),
  blogCategoryController.findAll
);

// update
router.put(
  "/:id",
  joiSchemaValidation.validateParams(blogCategoryValidationSchema.findById),
  jwtValidation.validateAdminToken,
  joiSchemaValidation.validateBody(blogCategoryValidationSchema.update),
  blogCategoryController.update
);

// delete
router.delete(
  "/:id",
  joiSchemaValidation.validateParams(blogCategoryValidationSchema.findById),
  jwtValidation.validateAdminToken,
  joiSchemaValidation.validateBody(blogCategoryValidationSchema.findById),
  blogCategoryController.delete
);

// deleteMultiple
router.delete(
  "/",
  jwtValidation.validateAdminToken,
  joiSchemaValidation.validateBody(blogCategoryValidationSchema.deleteMultiple),
  blogCategoryController.deleteMultiple
);

module.exports = router;
