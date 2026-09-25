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
  "http://localhost:5174",
  "http://127.0.0.1:5174",
  "http://localhost:5175",
  "http://127.0.0.1:5175",
  "http://localhost:3000",
  "http://127.0.0.1:3000",
  "http://localhost:3001",
  "http://127.0.0.1:3001",
  "https://colin-mclean-admin.esta-dev.com",
  "http://colin-mclean-admin.esta-dev.com",
  "https://colin-admin.esta-dev.com",
  "http://colin-admin.esta-dev.com",
  "https://colin-mclean.esta-dev.com",
  "http://colin-mclean.esta-dev.com",
  "https://colin.esta-dev.com",
  "http://colin.esta-dev.com",
  "https://colin-mclean-api.esta-dev.com",
  "https://colin-mclean.com",
  "https://www.colin-mclean.com",
  "https://admin.colin-mclean.com",
  "https://www.admin.colin-mclean.com",

];

const envAllowedOrigins = (process.env.CORS_ORIGINS || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const allowedOrigins = new Set([...defaultAllowedOrigins, ...envAllowedOrigins]);

const corsOptions = {
  origin(origin, callback) {
    if (!origin) {
      return callback(null, true);
    }

    // Allow all local development origins (localhost or 127.0.0.1 on any port)
    if (/^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin)) {
      return callback(null, true);
    }

    // Allow any esta-dev.com or colin-mclean.com or vercel.app preview/production subdomains
    if (
      /^https?:\/\/([a-z0-9-]+\.)*esta-dev\.com(:\d+)?$/i.test(origin) ||
      /^https?:\/\/([a-z0-9-]+\.)*colin-mclean\.com(:\d+)?$/i.test(origin) ||
      /^https?:\/\/([a-z0-9-]+\.)*vercel\.app(:\d+)?$/i.test(origin)
    ) {
      return callback(null, true);
    }

    if (allowedOrigins.has(origin)) {
      return callback(null, true);
    }

    return callback(null, false);
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "X-Requested-With",
    "Accept",
    "Origin",
    "Cache-Control",
    "Pragma",
    "Access-Control-Request-Method",
    "Access-Control-Request-Headers",
  ],
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

// Keep API payload limits aligned with media uploads and CMS content.
app.use(bodyParser.json({ limit: "250mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "250mb" }));

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
      message: "Upload is too large. The maximum allowed file size is 250 MB.",
    });
  }

  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start listening the server
const PORT = process.env.PORT || 5900;
app.listen(PORT, () => {
  console.log(`Server is Running at ${PORT}`);
});
