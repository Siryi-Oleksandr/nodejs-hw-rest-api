const { HttpError } = require("../helpers");
const joiSchemes = require("../helpers/joiSchemaValidation");

const isValidRegisterBody = (req, res, next) => {
  const { error } = joiSchemes.joiRegisterSchemaValidation.validate(req.body);
  if (error) {
    next(new HttpError(400, error.message));
  }
  next();
};

module.exports = isValidRegisterBody;
