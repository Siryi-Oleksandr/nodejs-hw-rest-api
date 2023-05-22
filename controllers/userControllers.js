const { HttpError } = require("../helpers/");
const controllerWrapper = require("../helpers/controllerWrapper");
const User = require("../models/user");
const bcrypt = require("bcrypt");

// *******************  /api/users  ******************

const register = controllerWrapper(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new HttpError(409, `Email "${email}" in use`);
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({ ...req.body, password: hashPassword });
  res.status(201).json({ name: newUser.name, email: newUser.email });
});

const login = controllerWrapper(async (req, res) => {});

const logout = controllerWrapper(async (req, res) => {});

module.exports = {
  register,
  login,
  logout,
};
