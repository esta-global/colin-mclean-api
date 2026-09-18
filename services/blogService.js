const blogModel = require("../database/models/blogModel");
const blogCategoryModel = require("../database/models/blogCategoryModel");
const { serviceResponse, blogMessage } = require("../constants/message");
const dbHelper = require("../helpers/dbHelper");
const _ = require("lodash");
const logFile = require("../helpers/logFile");
const { create } = require("xmlbuilder2");

const CONTENT_TYPES = ["blog", "essay"];

function normalizeContentType(type = "blog") {
  return CONTENT_TYPES.includes(type) ? type : "blog";
}

function parseBooleanFilter(value) {
  if (value === true || value === "true") return true;
  if (value === false || value === "false") return false;
  return value;
}

function applyTypeCondition(conditions, type = "blog") {
  conditions.$and = [
    ...(conditions.$and || []),
    { $or: [{ type: "blog" }, { type: "essay" }, { type: { $exists: false } }, { type: null }] },
  ];
}

// generateBlogSitemap
module.exports.generateBlogSitemap = async () => {
  const response = _.cloneDeep(serviceResponse);

  try {
    // Fetch published blogs
    const blogs = await blogModel
      .find({
        isDeleted: false,
        status: true,
        $or: [{ type: "blog" }, { type: "essay" }, { type: { $exists: false } }, { type: null }],
        slug: { $exists: true, $ne: "" },
      })
      .select("slug updatedAt");

    if (!blogs.length) {
      response.message = "No blogs found";
      response.body = "";
      return response;
    }

    const BASE_URL = "https://victura.in";

    // Create XML root
    const xml = create({ version: "1.0", encoding: "UTF-8" }).ele("urlset", {
      xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9",
    });

    // Add blog URLs
    blogs.forEach((blog) => {
      const url = `${BASE_URL}/blog/${blog.slug}`;

      xml
        .ele("url")
        .ele("loc")
        .txt(url)
        .up()
        .ele("lastmod")
        .txt(
          blog.updatedAt
            ? blog.updatedAt.toISOString()
            : new Date().toISOString(),
        )
        .up()
        .ele("changefreq")
        .txt("weekly")
        .up()
        .ele("priority")
        .txt("0.8")
        .up()
        .up();
    });

    response.body = xml.end({ prettyPrint: true });
    response.message = "Blog sitemap generated successfully";
    response.isOkay = true;

    return response;
  } catch (error) {
    logFile.write(
      `Service : blogService : generateBlogSitemap, Error : ${error}`,
    );
    throw error;
  }
};

// create
module.exports.create = async (serviceData) => {
  const response = _.cloneDeep(serviceResponse);
  try {
    // Check name is already exist or not
    const isExist = await blogModel.findOne({
      slug: serviceData.slug,
    });

    // already exists
    if (isExist) {
      response.errors = {
        slug: blogMessage.ALREADY_EXISTS,
      };
      response.message = blogMessage.ALREADY_EXISTS;
      return response;
    }

    const newData = new blogModel({
      ...serviceData,
      type: normalizeContentType(serviceData.type),
    });
    const result = await newData.save();

    if (result) {
      response.body = dbHelper.formatMongoData(result);
      response.isOkay = true;
      response.message = blogMessage.CREATED;
    } else {
      response.message = blogMessage.NOT_CREATED;
      response.errors.error = blogMessage.NOT_CREATED;
    }
  } catch (error) {
    logFile.write(`Service : blogService: create, Error : ${error}`);
    throw new Error(error.message);
  }
  return response;
};

// findById
module.exports.findById = async (serviceData) => {
  const response = _.cloneDeep(serviceResponse);
  try {
    const result = await blogModel
      .findById({ _id: serviceData.id })
      .populate("category")
      .populate("author");
    if (result) {
      response.body = dbHelper.formatMongoData(result);
      response.message = blogMessage.FETCHED;
      response.isOkay = true;
    } else {
      response.errors.error = blogMessage.NOT_AVAILABLE;
      response.message = blogMessage.NOT_AVAILABLE;
    }
    return response;
  } catch (error) {
    logFile.write(`Service : blogService: findById, Error : ${error}`);
    throw new Error(error);
  }
};

// findBySlug
module.exports.findBySlug = async (serviceData) => {
  const response = _.cloneDeep(serviceResponse);
  try {
    const conditions = {
      slug: serviceData.slug,
      isDeleted: false,
    };
    applyTypeCondition(conditions, serviceData.type);

    const result = await blogModel
      .findOne(conditions)
      .populate("category")
      .populate("author");

    if (result) {
      response.body = dbHelper.formatMongoData(result);
      response.message = blogMessage.FETCHED;
      response.isOkay = true;
    } else {
      response.errors.error = blogMessage.NOT_AVAILABLE;
      response.message = blogMessage.NOT_AVAILABLE;
    }
    return response;
  } catch (error) {
    logFile.write(`Service : blogService: findBySlug, Error : ${error}`);
    throw new Error(error);
  }
};

// findAll
module.exports.findAll = async (serviceData) => {
  const response = _.cloneDeep(serviceResponse);
  try {
    let conditions = {};
    let sortCondition = {
      updatedAt: -1,
    };
    const {
      limit = 10,
      page = 1,
      searchQuery,
      status = true,
      featured = "",
      type = "blog",
      isDeleted = false,
      priority = "",
      slug = "",
      relatedBlog = "",
      categorySlug = "",
      sort = "",
      date = "",
    } = serviceData;

    if (sort === "oldest") sortCondition = { createdAt: 1 };
    if (sort === "newest") sortCondition = { createdAt: -1 };
    if (sort === "title-asc") sortCondition = { title: 1 };
    if (sort === "title-desc") sortCondition = { title: -1 };

    // SearchQuery
    if (searchQuery) {
      conditions.$or = [
        { title: { $regex: searchQuery, $options: "i" } },
        { slug: { $regex: searchQuery, $options: "i" } },
        { excerpt: { $regex: searchQuery, $options: "i" } },
      ];
    }

    // Status
    if (status == "All") {
      delete conditions.status;
    } else {
      conditions.status = parseBooleanFilter(status);
    }

    if (featured !== "" && featured !== "All") {
      conditions.featured = parseBooleanFilter(featured);
    }

    if (date) {
      const startDate = new Date(date);
      if (!Number.isNaN(startDate.getTime())) {
        const endDate = new Date(startDate);
        endDate.setHours(23, 59, 59, 999);
        startDate.setHours(0, 0, 0, 0);
        conditions.createdAt = { $gte: startDate, $lte: endDate };
      }
    }

    // DeletedAccount
    conditions.isDeleted = isDeleted;
    applyTypeCondition(conditions, type);

    if (slug) conditions.slug = slug;

    if (categorySlug) {
      const catInfo = await blogCategoryModel.findOne({ slug: categorySlug }).select("_id");
      if (catInfo) conditions.category = catInfo._id;
    }

    if (relatedBlog) {
      const blogDetails = await blogModel.findOne(
        { slug: relatedBlog, isDeleted: false },
        { _id: 1, category: 1 },
      );

      if (blogDetails) {
        conditions.category = blogDetails.category;
        conditions._id = { $ne: blogDetails._id };
      }
    }
    // count record
    const totalRecords = await blogModel.countDocuments(conditions);
    // Calculate the total number of pages
    const totalPages = Math.ceil(totalRecords / parseInt(limit));

    const result = await blogModel
      .find(conditions)
      .populate("category")
      .populate("author")
      .skip((parseInt(page) - 1) * parseInt(limit))
      .sort(sortCondition)
      .limit(parseInt(limit));

    if (result) {
      response.body = dbHelper.formatMongoData(result);
      response.isOkay = true;
      response.page = parseInt(page);
      response.totalPages = totalPages;
      response.totalRecords = totalRecords;
      response.message = blogMessage.FETCHED;
    } else {
      response.message = blogMessage.NOT_FETCHED;
    }
  } catch (error) {
    logFile.write(`Service : blogService: findAll, Error : ${error}`);

    throw new Error(error);
  }

  return response;
};

// update
module.exports.update = async (serviceData) => {
  const response = _.cloneDeep(serviceResponse);
  try {
    const { id, body } = serviceData;
    if (body.type) body.type = normalizeContentType(body.type);

    const result = await blogModel.findByIdAndUpdate(id, body, {
      new: true,
    });

    if (result) {
      response.body = dbHelper.formatMongoData(result);
      response.message = blogMessage.UPDATED;
      response.isOkay = true;
    } else {
      response.message = blogMessage.NOT_UPDATED;
      response.errors.id = blogMessage.INVALID_ID;
    }
  } catch (error) {
    logFile.write(`Service : blogService: update, Error : ${error}`);
    throw new Error(error);
  }
  return response;
};

// delete
module.exports.delete = async (serviceData) => {
  const response = _.cloneDeep(serviceResponse);
  try {
    const { id } = serviceData;
    // const result = await blogModel.findByIdAndUpdate(id, {
    //   isDeleted: true,
    //   status: false,
    // });

    const result = await blogModel.findByIdAndDelete(id, {
      new: true,
    });

    if (result) {
      response.message = blogMessage.DELETED;
      response.isOkay = true;
    } else {
      response.message = blogMessage.NOT_DELETED;
      response.errors.id = blogMessage.INVALID_ID;
    }
  } catch (error) {
    logFile.write(`Service : blogService: delete, Error : ${error}`);
    throw new Error(error);
  }

  return response;
};

// deleteMultiple
module.exports.deleteMultiple = async (serviceData) => {
  const response = _.cloneDeep(serviceResponse);
  try {
    // const result = await blogModel.findByIdAndUpdate(id, {
    //   isDeleted: true,
    //   status: false,
    // });

    // console.log(serviceData);

    const result = await blogModel.deleteMany({
      _id: { $in: serviceData.ids },
    });

    if (result) {
      response.message = `${result.deletedCount} ${blogMessage.DELETED}`;
      response.isOkay = true;
    } else {
      response.message = blogMessage.NOT_DELETED;
      response.errors.id = blogMessage.INVALID_ID;
    }
  } catch (error) {
    logFile.write(`Service : blogService: deleteMultiple, Error : ${error}`);
    throw new Error(error);
  }

  return response;
};
