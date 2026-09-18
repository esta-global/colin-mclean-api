const blogCategoryService = require("../services/blogCategoryService");
const _ = require("lodash");
const { defaultServerResponse } = require("../constants/message");
const logFile = require("../helpers/logFile");

// create
module.exports.create = async (req, res) => {
  const response = _.cloneDeep(defaultServerResponse);
  try {
    const serviceResponse = await blogCategoryService.create(req.body);
    if (serviceResponse.isOkay) {
      response.body = serviceResponse.body;
      response.status = 200;
    } else {
      response.errors = serviceResponse.errors;
    }
    response.message = serviceResponse.message;
  } catch (error) {
    logFile.write(
      `Controller: blogCategoryController: create, Error : ${error}`
    );

    response.message = error.message;
  }
  res.status(response.status).send(response);
};

// findById
module.exports.findById = async (req, res) => {
  const response = _.cloneDeep(defaultServerResponse);
  try {
    const serviceResponse = await blogCategoryService.findById(req.params);
    if (serviceResponse.isOkay) {
      response.body = serviceResponse.body;
      response.status = 200;
    } else {
      response.errors = serviceResponse.errors;
    }
    response.message = serviceResponse.message;
  } catch (error) {
    logFile.write(
      `Controller: blogCategoryController: findById, Error : ${error}`
    );
    response.message = error.message;
  }
  res.status(response.status).send(response);
};

// findBySlug
module.exports.findBySlug = async (req, res) => {
  const response = _.cloneDeep(defaultServerResponse);
  try {
    const serviceResponse = await blogCategoryService.findBySlug(req.params);
    if (serviceResponse.isOkay) {
      response.body = serviceResponse.body;
      response.status = 200;
    } else {
      response.errors = serviceResponse.errors;
    }
    response.message = serviceResponse.message;
  } catch (error) {
    logFile.write(
      `Controller: blogCategoryController: findBySlug, Error : ${error}`
    );
    response.message = error.message;
  }
  res.status(response.status).send(response);
};

// findAll
module.exports.findAll = async (req, res) => {
  const response = _.cloneDeep(defaultServerResponse);

  try {
    const serviceResponse = await blogCategoryService.findAll(req.query);
    if (serviceResponse.isOkay) {
      response.body = serviceResponse.body;
      response.page = serviceResponse.page;
      response.totalPages = serviceResponse.totalPages;
      response.totalRecords = serviceResponse.totalRecords;

      response.status = 200;
    } else {
      response.errors = serviceResponse.errors;
    }
    response.message = serviceResponse.message;
  } catch (error) {
    logFile.write(
      `Controller: blogCategoryController: findAll, Error : ${error}`
    );
    response.message = error.message;
  }
  res.status(response.status).send(response);
};

// update
module.exports.update = async (req, res) => {
  const response = _.cloneDeep(defaultServerResponse);
  try {
    const serviceResponse = await blogCategoryService.update({
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
      `Controller: blogCategoryController: update, Error : ${error}`
    );
    response.message = error.message;
  }
  res.status(response.status).send(response);
};

// delete
module.exports.delete = async (req, res) => {
  const response = _.cloneDeep(defaultServerResponse);
  try {
    const serviceResponse = await blogCategoryService.delete(req.params);
    if (serviceResponse.isOkay) {
      response.body = serviceResponse.body;
      response.status = 200;
    } else {
      response.errors = serviceResponse.errors;
    }
    response.message = serviceResponse.message;
  } catch (error) {
    logFile.write(
      `Controller: blogCategoryController: delete, Error : ${error}`
    );
    response.message = error.message;
  }
  res.status(response.status).send(response);
};

// deleteMultiple
module.exports.deleteMultiple = async (req, res) => {
  const response = _.cloneDeep(defaultServerResponse);
  try {
    const serviceResponse = await blogCategoryService.deleteMultiple(req.body);
    if (serviceResponse.isOkay) {
      response.body = serviceResponse.body;
      response.status = 200;
    } else {
      response.errors = serviceResponse.errors;
    }
    response.message = serviceResponse.message;
  } catch (error) {
    logFile.write(
      `Controller: blogCategoryController: deleteMultiple, Error : ${error}`
    );
    response.message = error.message;
  }
  res.status(response.status).send(response);
};
