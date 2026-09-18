const contactInquiryService = require("../services/contactInquiryService");
const _ = require("lodash");
const { defaultServerResponse } = require("../constants/message");
const logFile = require("../helpers/logFile");

module.exports.create = async (req, res) => {
  const response = _.cloneDeep(defaultServerResponse);
  try {
    const serviceResponse = await contactInquiryService.create(req.body);
    if (serviceResponse.isOkay) {
      response.body = serviceResponse.body;
      response.status = 200;
    } else {
      response.errors = serviceResponse.errors;
    }
    response.message = serviceResponse.message;
  } catch (error) {
    logFile.write(
      `Controller: contactInquiryController: create, Error : ${error}`,
    );
    response.message = error.message;
  }
  res.status(response.status).send(response);
};

module.exports.findAll = async (req, res) => {
  const response = _.cloneDeep(defaultServerResponse);
  try {
    const serviceResponse = await contactInquiryService.findAll(req.query);
    if (serviceResponse.isOkay) {
      response.body = serviceResponse.body;
      response.status = 200;
    } else {
      response.errors = serviceResponse.errors;
    }
    response.message = serviceResponse.message;
  } catch (error) {
    logFile.write(
      `Controller: contactInquiryController: findAll, Error : ${error}`,
    );
    response.message = error.message;
  }
  res.status(response.status).send(response);
};

module.exports.findById = async (req, res) => {
  const response = _.cloneDeep(defaultServerResponse);
  try {
    const serviceResponse = await contactInquiryService.findById(req.params);
    if (serviceResponse.isOkay) {
      response.body = serviceResponse.body;
      response.status = 200;
    } else {
      response.errors = serviceResponse.errors;
    }
    response.message = serviceResponse.message;
  } catch (error) {
    logFile.write(
      `Controller: contactInquiryController: findById, Error : ${error}`,
    );
    response.message = error.message;
  }
  res.status(response.status).send(response);
};

module.exports.update = async (req, res) => {
  const response = _.cloneDeep(defaultServerResponse);
  try {
    const serviceResponse = await contactInquiryService.update({
      id: req.params.id,
      body: req.body,
    });
    if (serviceResponse.isOkay) {
      response.body = serviceResponse.body;
      response.status = 200;
    } else {
      response.errors = serviceResponse.errors;
    }
    response.message = serviceResponse.message;
  } catch (error) {
    logFile.write(
      `Controller: contactInquiryController: update, Error : ${error}`,
    );
    response.message = error.message;
  }
  res.status(response.status).send(response);
};

module.exports.delete = async (req, res) => {
  const response = _.cloneDeep(defaultServerResponse);
  try {
    const serviceResponse = await contactInquiryService.delete(req.params);
    if (serviceResponse.isOkay) {
      response.body = serviceResponse.body;
      response.status = 200;
    } else {
      response.errors = serviceResponse.errors;
    }
    response.message = serviceResponse.message;
  } catch (error) {
    logFile.write(
      `Controller: contactInquiryController: delete, Error : ${error}`,
    );
    response.message = error.message;
  }
  res.status(response.status).send(response);
};
