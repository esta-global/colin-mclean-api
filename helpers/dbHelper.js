const mongoose = require("mongoose");

// Format Mongodb Data
module.exports.formatMongoData = (values) => {
  if (!values) return values;

  if (Array.isArray(values)) {
    return values.map((value) => module.exports.formatMongoData(value));
  }

  if (typeof values.toObject === "function") {
    const plainValue = values.toObject();
    delete plainValue.__v;
    return plainValue;
  }

  if (typeof values === "object") {
    const plainValue = { ...values };
    delete plainValue.__v;
    return plainValue;
  } else {
    return values;
  }
};

module.exports.checkMongoObject = (value) => {
  return mongoose.Types.ObjectId.isValid(value);
};
