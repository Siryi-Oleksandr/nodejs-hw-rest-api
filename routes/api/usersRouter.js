const express = require("express");
const {
  register,
  verifyEmail,
  resendVerifyEmail,
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
  joiVerifyEmailSchema,
} = require("../../helpers/joiSchemaValidation");
const { isValidBody, authenticate, upload } = require("../../middlewares");

const router = express.Router();

router.post("/register", isValidBody(joiRegisterSchemaValidation), register);
router.get("/verify/:verificationToken", verifyEmail);
router.post("/verify", isValidBody(joiVerifyEmailSchema), resendVerifyEmail);
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
