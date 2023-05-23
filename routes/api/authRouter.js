const express = require("express");
const {
  register,
  login,
  logout,
  getCurrent,
} = require("../../controllers/userControllers");
const {
  joiRegisterSchemaValidation,
  joiLoginSchemaValidation,
} = require("../../helpers/joiSchemaValidation");
const { isValidBody, authenticate } = require("../../middlewares");

const router = express.Router();

router.post("/register", isValidBody(joiRegisterSchemaValidation), register);
router.post("/login", isValidBody(joiLoginSchemaValidation), login);
router.post("/logout", authenticate, logout);
router.get("/current", authenticate, getCurrent);

module.exports = router;
