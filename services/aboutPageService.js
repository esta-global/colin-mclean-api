const aboutPageModel = require("../database/models/aboutPageModel");
const { serviceResponse, aboutPageMessage } = require("../constants/message");
const dbHelper = require("../helpers/dbHelper");
const _ = require("lodash");
const logFile = require("../helpers/logFile");

const aboutPageFields = [
  "title",
  "role",
  "portraitImage",
  "biography",
  "seo",
];

const sanitizeAboutPageData = (data = {}) => {
  return _.pick(_.cloneDeep(data), aboutPageFields);
};

// create
module.exports.create = async (serviceData) => {
  const response = _.cloneDeep(serviceResponse);
  try {
    const sanitizedData = sanitizeAboutPageData(serviceData);
    const existingData = await aboutPageModel.findOne();

    if (existingData) {
      const result = await aboutPageModel.findOneAndReplace(
        { _id: existingData._id },
        {
          ...sanitizedData,
          createdAt: existingData.createdAt,
        },
        { new: true, runValidators: true },
      );

      if (result) {
        response.body = dbHelper.formatMongoData(result);
        response.isOkay = true;
        response.message = aboutPageMessage.UPDATED;
      } else {
        response.message = aboutPageMessage.NOT_UPDATED;
        response.errors.error = aboutPageMessage.NOT_UPDATED;
      }
    } else {
      const newData = new aboutPageModel(sanitizedData);
      const result = await newData.save();

      if (result) {
        response.body = dbHelper.formatMongoData(result);
        response.isOkay = true;
        response.message = aboutPageMessage.CREATED;
      } else {
        response.message = aboutPageMessage.NOT_CREATED;
        response.errors.error = aboutPageMessage.NOT_CREATED;
      }
    }
  } catch (error) {
    logFile.write(`Service : aboutPageService: create, Error : ${error}`);
    throw new Error(error.message);
  }
  return response;
};

// findOne
module.exports.findOne = async () => {
  const response = _.cloneDeep(serviceResponse);
  try {
    const result = await aboutPageModel.findOne();
    if (result) {
      response.body = dbHelper.formatMongoData(result);
      response.message = aboutPageMessage.FETCHED;
      response.isOkay = true;
    } else {
      response.errors.error = aboutPageMessage.NOT_AVAILABLE;
      response.message = aboutPageMessage.NOT_AVAILABLE;
    }
    return response;
  } catch (error) {
    logFile.write(`Service : aboutPageService: findOne, Error : ${error}`);
    throw new Error(error);
  }
};

// update
module.exports.update = async (serviceData) => {
  const response = _.cloneDeep(serviceResponse);
  try {
    const sanitizedData = sanitizeAboutPageData(serviceData);
    const result = await aboutPageModel.findOneAndUpdate({}, sanitizedData, {
      new: true,
      runValidators: true,
    });

    if (result) {
      response.body = dbHelper.formatMongoData(result);
      response.message = aboutPageMessage.UPDATED;
      response.isOkay = true;
    } else {
      response.message = aboutPageMessage.NOT_AVAILABLE;
      response.errors.error = aboutPageMessage.NOT_AVAILABLE;
    }
  } catch (error) {
    logFile.write(`Service : aboutPageService: update, Error : ${error}`);
    throw new Error(error.message);
  }
  return response;
};
