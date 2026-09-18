const fs = require("fs");
const path = require("path");
const moment = require("moment");

module.exports.write = function (errorMessage) {
  const logDir = path.join(__dirname, "..", "logs");
  const logFile = path.join(logDir, "errors.log");

  const logEntry = `${moment(new Date()).format(
    "DD-MM-YYYY hh:mm:ss A"
  )}\nError - ${errorMessage}\n\n`;

  fs.mkdirSync(logDir, { recursive: true });
  fs.appendFileSync(logFile, logEntry);
};
