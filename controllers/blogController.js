const blogService = require("../services/blogService");
const _ = require("lodash");
const { defaultServerResponse } = require("../constants/message");
const logFile = require("../helpers/logFile");

// create
module.exports.create = async (req, res) => {
  const response = _.cloneDeep(defaultServerResponse);
  try {
    const serviceResponse = await blogService.create(req.body);
    if (serviceResponse.isOkay) {
      response.body = serviceResponse.body;
      response.status = 200;
    } else {
      response.errors = serviceResponse.errors;
    }
    response.message = serviceResponse.message;
  } catch (error) {
    logFile.write(`Controller: blogController: create, Error : ${error}`);

    response.message = error.message;
  }
  res.status(response.status).send(response);
};

// generateBlogSitemap
module.exports.generateBlogSitemap = async (req, res) => {
  try {
    const serviceResponse = await blogService.generateBlogSitemap();

    if (!serviceResponse.isOkay) {
      return res.status(404).send("No sitemap data found");
    }

    res.setHeader("Content-Type", "application/xml");
    res.setHeader("Cache-Control", "public, max-age=3600");

    return res.status(200).send(serviceResponse.body);
  } catch (error) {
    logFile.write(
      `Controller: blogController: generateBlogSitemap, Error : ${error}`,
    );
    return res.status(500).send("Internal Server Error");
  }
};

// findById
module.exports.findById = async (req, res) => {
  const response = _.cloneDeep(defaultServerResponse);
  try {
    const serviceResponse = await blogService.findById(req.params);
    if (serviceResponse.isOkay) {
      response.body = serviceResponse.body;
      response.status = 200;
    } else {
      response.errors = serviceResponse.errors;
    }
    response.message = serviceResponse.message;
  } catch (error) {
    logFile.write(`Controller: blogController: findById, Error : ${error}`);
    response.message = error.message;
  }
  res.status(response.status).send(response);
};

// findBySlug
module.exports.findBySlug = async (req, res) => {
  const response = _.cloneDeep(defaultServerResponse);
  try {
    const serviceResponse = await blogService.findBySlug({
      ...req.params,
      ...req.query,
    });
    if (serviceResponse.isOkay) {
      response.body = serviceResponse.body;
      response.status = 200;
    } else {
      response.errors = serviceResponse.errors;
    }
    response.message = serviceResponse.message;
  } catch (error) {
    logFile.write(`Controller: blogController: findBySlug, Error : ${error}`);
    response.message = error.message;
  }
  res.status(response.status).send(response);
};

// findAll
module.exports.findAll = async (req, res) => {
  const response = _.cloneDeep(defaultServerResponse);

  try {
    const serviceResponse = await blogService.findAll(req.query);
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
    logFile.write(`Controller: blogController: findAll, Error : ${error}`);
    response.message = error.message;
  }
  res.status(response.status).send(response);
};

// update
module.exports.update = async (req, res) => {
  const response = _.cloneDeep(defaultServerResponse);
  try {
    const serviceResponse = await blogService.update({
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
    logFile.write(`Controller: blogController: update, Error : ${error}`);
    response.message = error.message;
  }
  res.status(response.status).send(response);
};

// delete
module.exports.delete = async (req, res) => {
  const response = _.cloneDeep(defaultServerResponse);
  try {
    const serviceResponse = await blogService.delete(req.params);
    if (serviceResponse.isOkay) {
      response.body = serviceResponse.body;
      response.status = 200;
    } else {
      response.errors = serviceResponse.errors;
    }
    response.message = serviceResponse.message;
  } catch (error) {
    logFile.write(`Controller: blogController: delete, Error : ${error}`);
    response.message = error.message;
  }
  res.status(response.status).send(response);
};

// deleteMultiple
module.exports.deleteMultiple = async (req, res) => {
  const response = _.cloneDeep(defaultServerResponse);
  try {
    const serviceResponse = await blogService.deleteMultiple(req.body);
    if (serviceResponse.isOkay) {
      response.body = serviceResponse.body;
      response.status = 200;
    } else {
      response.errors = serviceResponse.errors;
    }
    response.message = serviceResponse.message;
  } catch (error) {
    logFile.write(
      `Controller: blogController: deleteMultiple, Error : ${error}`,
    );
    response.message = error.message;
  }
  res.status(response.status).send(response);
};
