const express = require("express");
const {
  register,
  login,
  logout,
  updateStatusUser,
  getCurrent,
} = require("../../controllers/userControllers");
const {
  joiRegisterSchemaValidation,
  joiLoginSchemaValidation,
  joiUpdateSubscriptionUser,
} = require("../../helpers/joiSchemaValidation");
const { isValidBody, authenticate } = require("../../middlewares");

const router = express.Router();

router.post("/register", isValidBody(joiRegisterSchemaValidation), register);
router.post("/login", isValidBody(joiLoginSchemaValidation), login);
router.post("/logout", authenticate, logout);
router.put(
  "/updateSatus",
  authenticate,
  isValidBody(joiUpdateSubscriptionUser),
  updateStatusUser
);
router.get("/current", authenticate, getCurrent);

module.exports = router;
