const express = require("express");
const isValidRegisterBody = require("../../middlewares/isValidRegisterBody");
const { register } = require("../../controllers/userControllers");

const router = express.Router();

router.post("/register", isValidRegisterBody, register);

module.exports = router;
