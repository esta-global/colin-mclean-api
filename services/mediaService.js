const mediaModel = require("../database/models/mediaModel");
const { serviceResponse, mediaMessage } = require("../constants/message");
const dbHelper = require("../helpers/dbHelper");
const _ = require("lodash");
const logFile = require("../helpers/logFile");

const fs = require("fs").promises; // Use the promises API for async/await
const path = require("path");
// Define the absolute path to the uploads directory
const UPLOADS_DIR = path.join(process.cwd(), "uploads"); // Base directory

// create
module.exports.create = async (serviceData) => {
  const response = _.cloneDeep(serviceResponse);
  try {
    let medias = [];
    if (Array.isArray(serviceData)) {
      medias = serviceData.map((item) => {
        return {
          filename: item.filename,
          mimetype: item.mimetype,
          size: item.size,
        };
      });
    } else {
      medias.push({
        filename: serviceData.filename,
        mimetype: serviceData.mimetype,
        size: serviceData.size,
      });
    }

    const result = await mediaModel.insertMany(medias);

    if (result) {
      response.body = dbHelper.formatMongoData(result);
      response.isOkay = true;
      response.message = mediaMessage.CREATED;
    } else {
      response.message = mediaMessage.NOT_CREATED;
      response.errors.error = mediaMessage.NOT_CREATED;
    }
  } catch (error) {
    logFile.write(`Service : mediaService: create, Error : ${error}`);
    throw new Error(error.message);
  }
  return response;
};

// findById
module.exports.findById = async (serviceData) => {
  const response = _.cloneDeep(serviceResponse);
  try {
    const result = await mediaModel.findById({
      _id: serviceData.id,
    });
    if (result) {
      response.body = dbHelper.formatMongoData(result);
      response.message = mediaMessage.FETCHED;
      response.isOkay = true;
    } else {
      response.errors.id = mediaMessage.NOT_AVAILABLE;
      response.message = mediaMessage.NOT_AVAILABLE;
    }
    return response;
  } catch (error) {
    logFile.write(`Service : mediaService: findById, Error : ${error}`);
    throw new Error(error);
  }
};

// findAll
module.exports.findAll = async (serviceData) => {
  const response = _.cloneDeep(serviceResponse);
  try {
    let conditions = {};
    const {
      limit = 10,
      page = 1,
      searchQuery,
      status = "ALL",
      fileType = "ALL",
      isDeleted = false,
    } = serviceData;

    // SearchQuery
    if (searchQuery) {
      conditions = {
        $or: [{ filename: { $regex: searchQuery, $options: "i" } }],
      };
    }

    // fileType
    if (fileType && fileType !== "ALL") {
      if (fileType === "VIDEO") {
        conditions.mimetype = { $regex: `^video/`, $options: "i" };
      } else if (fileType === "IMAGE") {
        conditions.mimetype = { $regex: `^image/`, $options: "i" };
      }
    }

    // status
    if (status == "ALL") {
      delete conditions.status;
    } else {
      conditions.status = status;
    }

    // DeletedAccount
    conditions.isDeleted = isDeleted;

    // count record
    const totalRecords = await mediaModel.countDocuments(conditions);
    // Calculate the total number of pages
    const totalPages = Math.ceil(totalRecords / parseInt(limit));

    const result = await mediaModel
      .find(conditions)
      .skip((parseInt(page) - 1) * parseInt(limit))
      .sort({ createdAt: -1 })
      .limit(parseInt(limit));

    if (result) {
      response.body = dbHelper.formatMongoData(result);
      response.isOkay = true;
      response.page = parseInt(page);
      response.totalPages = totalPages;
      response.totalRecords = totalRecords;
      response.message = mediaMessage.FETCHED;
    } else {
      response.message = mediaMessage.NOT_FETCHED;
    }
  } catch (error) {
    logFile.write(`Service : mediaService: findAll, Error : ${error}`);

    throw new Error(error);
  }

  return response;
};

// update
module.exports.update = async (serviceData) => {
  const response = _.cloneDeep(serviceResponse);
  try {
    const { id, body } = serviceData;

    const result = await mediaModel.findByIdAndUpdate(id, body, {
      new: true,
    });

    if (result) {
      response.body = dbHelper.formatMongoData(result);
      response.message = mediaMessage.UPDATED;
      response.isOkay = true;
    } else {
      response.message = mediaMessage.NOT_UPDATED;
      response.errors.id = mediaMessage.INVALID_ID;
    }
  } catch (error) {
    logFile.write(`Service : mediaService: update, Error : ${error}`);
    throw new Error(error);
  }
  return response;
};

// delete
module.exports.delete = async (serviceData) => {
  const response = _.cloneDeep(serviceResponse);
  try {
    const { filename } = serviceData;

    const result = await mediaModel.findOneAndDelete(
      { filename },
      {
        new: true,
      },
    );

    if (result) {
      // Path to the file
      const filePath = path.join(UPLOADS_DIR, result.filename);

      // Check if the file exists using fs.promises.access()
      await fs.access(filePath);

      // If the file exists, delete it using fs.promises.unlink()
      await fs.unlink(filePath);

      response.message = mediaMessage.DELETED;
      response.isOkay = true;
    } else {
      response.message = mediaMessage.NOT_DELETED;
      response.errors.id = mediaMessage.INVALID_ID;
    }
  } catch (error) {
    logFile.write(`Service : mediaService: delete, Error : ${error}`);
    throw new Error(error);
  }

  return response;
};

// delete
module.exports.delete = async (serviceData) => {
  const response = _.cloneDeep(serviceResponse);
  try {
    const { filename } = serviceData;

    const result = await mediaModel.findOneAndDelete(
      { filename },
      {
        new: true,
      },
    );

    if (result) {
      // Path to the file
      const filePath = path.join(UPLOADS_DIR, result.filename);

      // Check if the file exists using fs.promises.access()
      await fs.access(filePath);

      // If the file exists, delete it using fs.promises.unlink()
      await fs.unlink(filePath);

      response.message = mediaMessage.DELETED;
      response.isOkay = true;
    } else {
      response.message = mediaMessage.NOT_DELETED;
      response.errors.id = mediaMessage.INVALID_ID;
    }
  } catch (error) {
    logFile.write(`Service : mediaService: delete, Error : ${error}`);
    throw new Error(error);
  }

  return response;
};

// deleteMultiple
module.exports.deleteMultiple = async (serviceData) => {
  const response = _.cloneDeep(serviceResponse);
  try {
    const result = await mediaModel.deleteMany({
      _id: { $in: serviceData.ids },
    });

    if (result) {
      response.message = `${result.deletedCount} ${mediaMessage.DELETED}`;
      response.isOkay = true;
    } else {
      response.message = mediaMessage.NOT_DELETED;
      response.errors.id = mediaMessage.INVALID_ID;
    }
  } catch (error) {
    logFile.write(`Service : mediaService: deleteMultiple, Error : ${error}`);
    throw new Error(error);
  }

  return response;
};
