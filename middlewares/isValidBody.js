const { HttpError } = require("../helpers");
const joiSchemes = require("../helpers/joiSchemaValidation");

const isValidBody = (req, res, next) => {
  const { error } = joiSchemes.joiContactsSchemaValidation.validate(req.body);
  if (error) {
    next(new HttpError(400, error.message));
  }
  next();
};

module.exports = isValidBody;
