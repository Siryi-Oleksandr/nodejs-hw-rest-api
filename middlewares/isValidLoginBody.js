const { HttpError } = require("../helpers");
const joiSchemes = require("../helpers/joiSchemaValidation");

const isValidLoginBody = (req, res, next) => {
  const { error } = joiSchemes.joiLoginSchemaValidation.validate(req.body);
  if (error) {
    next(new HttpError(400, error.message));
  }
  next();
};

module.exports = isValidLoginBody;
