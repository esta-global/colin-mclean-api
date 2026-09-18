const mongoose = require("mongoose");
require("dotenv").config();

const blogModel = require("../database/models/blogModel");
const connection = require("../database/connection");

async function migrateBlogContentType() {
  try {
    await connection();
    const result = await blogModel.updateMany(
      {
        $or: [{ type: { $exists: false } }, { type: null }, { type: "" }],
      },
      { $set: { type: "blog" } },
    );

    console.log(`Updated ${result.modifiedCount || 0} blog documents with type=blog.`);
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  } finally {
    await mongoose.connection.close();
  }
}

migrateBlogContentType();
