const isValidId = require("../middlewares/isValidId");
const isValidBody = require("../middlewares/isValidBody");
const authenticate = require("../middlewares/authenticate");

module.exports = { isValidId, isValidBody, authenticate };
