const express = require("express");
const {
  register,
  login,
  logout,
  updateStatusUser,
  updateAvatar,
  getCurrent,
} = require("../../controllers/userControllers");
const {
  joiRegisterSchemaValidation,
  joiLoginSchemaValidation,
  joiUpdateSubscriptionUser,
} = require("../../helpers/joiSchemaValidation");
const { isValidBody, authenticate, upload } = require("../../middlewares");

const router = express.Router();

router.post("/register", isValidBody(joiRegisterSchemaValidation), register);
router.post("/login", isValidBody(joiLoginSchemaValidation), login);
router.post("/logout", authenticate, logout);
router.put(
  "/",
  authenticate,
  isValidBody(joiUpdateSubscriptionUser),
  updateStatusUser
);
router.patch("/avatars", authenticate, upload.single("avatar"), updateAvatar);
router.get("/current", authenticate, getCurrent);

module.exports = router;
