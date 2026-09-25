const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Ensure 'uploads' directory exists
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

// Configure storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Files will be saved in 'uploads' folder
  },
  // filename: (req, file, cb) => {
  //   const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
  //   cb(
  //     null,
  //     file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
  //   );
  // },
  filename: (req, file, cb) => {
    const originalName = path.parse(file.originalname).name; // Without extension
    const ext = path.extname(file.originalname); // e.g. '.jpg'
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const sanitizedOriginalName = originalName.replace(/\s+/g, "_"); // optional: remove spaces
    const finalName =
      `${sanitizedOriginalName}-${uniqueSuffix}${ext}`.toLowerCase();
    cb(null, finalName);
  },
});

// The CMS accepts up to ten files per request, with each file capped at 250 MB.
module.exports.upload = multer({
  storage,
  limits: {
    fileSize: 250 * 1024 * 1024,
    files: 10,
  },
});
