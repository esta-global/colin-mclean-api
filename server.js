const express = require("express");
const dotEnv = require("dotenv");
const bodyParser = require("body-parser");
const dbConnection = require("./database/connection");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const { google } = require("googleapis");
const dns = require("dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);

dotEnv.config();
// Connect to the database
dbConnection();

// Create a app
const app = express();

const defaultAllowedOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "http://localhost:5175",
  "http://localhost:3000",
  "http://127.0.0.1:3000",
  "https://ifma-admin.esta-dev.com",
  "https://ifma.esta-dev.com",
];

const envAllowedOrigins = (process.env.CORS_ORIGINS || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const allowedOrigins = new Set([...defaultAllowedOrigins, ...envAllowedOrigins]);

const corsOptions = {
  origin(origin, callback) {
    if (!origin || allowedOrigins.has(origin)) {
      return callback(null, true);
    }

    return callback(new Error(`Not allowed by CORS: ${origin}`));
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

// Keep API payload limits aligned with media uploads and CMS content.
app.use(bodyParser.json({ limit: "25mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "25mb" }));

// Serve files from the 'uploads' directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Route to get all uploaded filese
app.get("/files", (req, res) => {
  const uploadDir = path.join(__dirname, "uploads");

  fs.readdir(uploadDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read upload directory" });
    }

    const fileDetails = files.map((file) => {
      return {
        fileName: file,
        url: `${req.protocol}://${req.get("host")}/uploads/${file}`,
      };
    });

    res.json({
      message: "List of all uploaded files",
      files: fileDetails,
    });
  });
});

// router middleware
app.use("/api/v1/admins", require("./routes/adminRouter"));
app.use("/api/v1/homepage", require("./routes/homepageRoutes"));
app.use("/api/v1/aboutPage", require("./routes/aboutPageRouter"));

// Blog & Essay Management
app.use("/api/v1/authors", require("./routes/authorRouter"));
app.use("/api/v1/blogCategories", require("./routes/blogCategoryRouter"));
app.use("/api/v1/blogs", require("./routes/blogRouter"));

// Contact Inquiries
app.use("/api/v1/contact-inquiries", require("./routes/contactInquiryRouter"));

// Media & File Uploads
app.use("/api/v1/fileUploads", require("./routes/fileUploadingRouter"));
app.use("/api/v1/media", require("./routes/mediaRouter"));

// Error handling middleware
app.use((err, req, res, next) => {
  if (err?.type === "entity.too.large" || err?.code === "LIMIT_FILE_SIZE") {
    return res.status(413).send({
      status: 413,
      message: "Upload is too large. The maximum allowed file size is 20 MB.",
    });
  }

  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start listening the server
const PORT = process.env.PORT || 5201;
app.listen(PORT, () => {
  console.log(`Server is Running at ${PORT}`);
});
