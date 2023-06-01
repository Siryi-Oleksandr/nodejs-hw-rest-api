const Joi = require("joi");

const phoneRegex =
  /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,3}[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,4}$/;
const emailRegex =
  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
const subscriptionList = ["starter", "pro", "business"];

const joiContactsSchemaValidation = Joi.object({
  name: Joi.string().min(3).max(35).required().messages({
    "any.required": "Missing required 'name' field",
    "string.min": "The length of 'name' must be between 3 and 35 characters",
    "string.max": "The length of 'name' must be between 3 and 35 characters",
  }),

  email: Joi.string()
    .pattern(new RegExp(emailRegex))
    .required()
    .messages({ "any.required": "Missing required 'email' field" }),

  phone: Joi.string().pattern(new RegExp(phoneRegex)).required().messages({
    "any.required": "Missing required 'phone' field",
    "string.pattern.base":
      "The phone number format is incorrect. Please enter in the format +XX-XXX-XXX-XX-XX",
  }),

  favorite: Joi.boolean(),
});

const joiUpdateStatusSchemaValidation = Joi.object({
  favorite: Joi.boolean()
    .required()
    .messages({ "any.required": "missing field favorite" }),
});

const joiRegisterSchemaValidation = Joi.object({
  email: Joi.string()
    .pattern(new RegExp(emailRegex))
    .required()
    .messages({ "any.required": "Email is required" }),

  password: Joi.string().min(6).required().messages({
    "any.required": "Password is required",
    "string.min": "The length of 'password' must be min 6 characters",
  }),

  subscription: Joi.string()
    .valid(...subscriptionList)
    .default(subscriptionList[0]),
});

const joiVerifyEmailSchema = Joi.object({
  email: Joi.string()
    .pattern(new RegExp(emailRegex))
    .required()
    .messages({ "any.required": "missing required field email" }),
});

const joiLoginSchemaValidation = Joi.object({
  email: Joi.string()
    .pattern(new RegExp(emailRegex))
    .required()
    .messages({ "any.required": "Email is required" }),

  password: Joi.string().min(6).required().messages({
    "any.required": "Password is required",
    "string.min": "The length of 'password' must be min 6 characters",
  }),

  token: Joi.string(),
});

const joiUpdateSubscriptionUser = Joi.object({
  subscription: Joi.string()
    .valid(...subscriptionList)
    .required()
    .messages({
      "any.required": "Subscription field is required",
    }),
});

module.exports = {
  joiContactsSchemaValidation,
  joiUpdateStatusSchemaValidation,
  joiRegisterSchemaValidation,
  joiLoginSchemaValidation,
  joiUpdateSubscriptionUser,
  joiVerifyEmailSchema,
};
