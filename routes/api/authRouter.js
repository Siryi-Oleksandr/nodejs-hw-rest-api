const express = require("express");
const {
  register,
  login,
  logout,
} = require("../../controllers/userControllers");
const {
  joiRegisterSchemaValidation,
  joiLoginSchemaValidation,
} = require("../../helpers/joiSchemaValidation");
const { isValidBody } = require("../../middlewares");

const router = express.Router();

router.post("/register", isValidBody(joiRegisterSchemaValidation), register);
router.post("/login", isValidBody(joiLoginSchemaValidation), login);
router.post("/logout", logout);

module.exports = router;
