const router = require("express").Router();
const blogController = require("../controllers/blogController");
const blogValidationSchema = require("../apiValidationSchemas/blogValidationSchema");
const joiSchemaValidation = require("../middlewares/joiSchemaValidation");
const jwtValidation = require("../middlewares/jwtValidation");

// create
router.post(
  "/",
  jwtValidation.validateAdminToken,
  joiSchemaValidation.validateBody(blogValidationSchema.create),
  blogController.create,
);

// generateBlogSitemap
router.get("/sitemap.xml", blogController.generateBlogSitemap);

// findBySlug
router.get(
  "/slug/:slug",
  joiSchemaValidation.validateParams(blogValidationSchema.findBySlug),
  blogController.findBySlug,
);

// findById
router.get(
  "/:id",
  joiSchemaValidation.validateParams(blogValidationSchema.findById),
  blogController.findById,
);

// findAll
router.get(
  "/",
  joiSchemaValidation.validateQuery(blogValidationSchema.findAll),
  blogController.findAll,
);

// update
router.put(
  "/:id",
  joiSchemaValidation.validateParams(blogValidationSchema.findById),
  jwtValidation.validateAdminToken,
  joiSchemaValidation.validateBody(blogValidationSchema.update),
  blogController.update,
);

// delete
router.delete(
  "/:id",
  joiSchemaValidation.validateParams(blogValidationSchema.findById),
  jwtValidation.validateAdminToken,
  joiSchemaValidation.validateBody(blogValidationSchema.findById),
  blogController.delete,
);

// deleteMultiple
router.delete(
  "/",
  jwtValidation.validateAdminToken,
  joiSchemaValidation.validateBody(blogValidationSchema.deleteMultiple),
  blogController.deleteMultiple,
);

module.exports = router;
