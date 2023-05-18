const { HttpError } = require("../helpers");
const joiSchemes = require("../helpers/joiSchemaValidation");

const isValidStatus = (req, res, next) => {
  const { error } = joiSchemes.joiUpdateFavoriteSchemaValidation.validate(
    req.body
  );
  if (error) {
    next(new HttpError(400, error.message));
  }
  next();
};

module.exports = isValidStatus;
