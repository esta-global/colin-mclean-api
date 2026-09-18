const contactInquiryModel = require("../database/models/contactInquiryModel");
const {
  serviceResponse,
  contactInquiryMessage,
} = require("../constants/message");
const dbHelper = require("../helpers/dbHelper");
const _ = require("lodash");
const logFile = require("../helpers/logFile");

const inquiryFields = [
  "name",
  "email",
  "phone",
  "message",
  "status",
  "adminNotes",
];

const publicInquiryFields = [
  "name",
  "email",
  "phone",
  "message",
];

const sanitizeInquiryData = (data = {}, allowedFields = inquiryFields) => {
  const cloned = _.cloneDeep(data);
  if (!cloned.name && cloned.fullName) {
    cloned.name = cloned.fullName;
  }
  return _.pick(cloned, allowedFields);
};

module.exports.create = async (serviceData) => {
  const response = _.cloneDeep(serviceResponse);
  try {
    const sanitized = sanitizeInquiryData(serviceData, publicInquiryFields);
    const newData = new contactInquiryModel(sanitized);
    const result = await newData.save();

    if (result) {
      response.body = dbHelper.formatMongoData(result);
      response.isOkay = true;
      response.message = contactInquiryMessage.CREATED;
    } else {
      response.message = contactInquiryMessage.NOT_CREATED;
      response.errors.error = contactInquiryMessage.NOT_CREATED;
    }
  } catch (error) {
    logFile.write(`Service : contactInquiryService: create, Error : ${error}`);
    throw new Error(error.message);
  }
  return response;
};

module.exports.findAll = async (serviceData) => {
  const response = _.cloneDeep(serviceResponse);
  try {
    const {
      page = 1,
      limit = 10,
      status = "ALL",
      sort = "newest",
    } = serviceData;

    const search = serviceData.search || serviceData.searchQuery;
    const parsedPage = parseInt(page);
    const parsedLimit = parseInt(limit);
    const conditions = {};

    if (search) {
      conditions.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { phone: { $regex: search, $options: "i" } },
        { message: { $regex: search, $options: "i" } },
      ];
    }

    if (status && status !== "ALL") {
      conditions.status = status;
    }

    const totalItems = await contactInquiryModel.countDocuments(conditions);
    const totalPages = Math.ceil(totalItems / parsedLimit);
    const sortOrder = sort === "oldest" ? 1 : -1;

    const result = await contactInquiryModel
      .find(conditions)
      .skip((parsedPage - 1) * parsedLimit)
      .sort({ createdAt: sortOrder })
      .limit(parsedLimit);

    response.body = {
      items: dbHelper.formatMongoData(result),
      pagination: {
        page: parsedPage,
        limit: parsedLimit,
        totalItems,
        totalPages,
      },
    };
    response.isOkay = true;
    response.message = contactInquiryMessage.FETCHED;
  } catch (error) {
    logFile.write(`Service : contactInquiryService: findAll, Error : ${error}`);
    throw new Error(error.message);
  }
  return response;
};

module.exports.findById = async (serviceData) => {
  const response = _.cloneDeep(serviceResponse);
  try {
    const result = await contactInquiryModel.findById(serviceData.id);

    if (result) {
      response.body = dbHelper.formatMongoData(result);
      response.message = contactInquiryMessage.FETCHED;
      response.isOkay = true;
    } else {
      response.errors.id = contactInquiryMessage.NOT_AVAILABLE;
      response.message = contactInquiryMessage.NOT_AVAILABLE;
    }
  } catch (error) {
    logFile.write(`Service : contactInquiryService: findById, Error : ${error}`);
    throw new Error(error.message);
  }
  return response;
};

module.exports.update = async (serviceData) => {
  const response = _.cloneDeep(serviceResponse);
  try {
    const { id, body } = serviceData;
    const result = await contactInquiryModel.findByIdAndUpdate(
      id,
      sanitizeInquiryData(body),
      {
        new: true,
        runValidators: true,
      },
    );

    if (result) {
      response.body = dbHelper.formatMongoData(result);
      response.message = contactInquiryMessage.UPDATED;
      response.isOkay = true;
    } else {
      response.message = contactInquiryMessage.NOT_UPDATED;
      response.errors.id = contactInquiryMessage.INVALID_ID;
    }
  } catch (error) {
    logFile.write(`Service : contactInquiryService: update, Error : ${error}`);
    throw new Error(error.message);
  }
  return response;
};

module.exports.delete = async (serviceData) => {
  const response = _.cloneDeep(serviceResponse);
  try {
    const result = await contactInquiryModel.findByIdAndDelete(serviceData.id);

    if (result) {
      response.message = contactInquiryMessage.DELETED;
      response.isOkay = true;
    } else {
      response.message = contactInquiryMessage.NOT_DELETED;
      response.errors.id = contactInquiryMessage.INVALID_ID;
    }
  } catch (error) {
    logFile.write(`Service : contactInquiryService: delete, Error : ${error}`);
    throw new Error(error.message);
  }
  return response;
};
