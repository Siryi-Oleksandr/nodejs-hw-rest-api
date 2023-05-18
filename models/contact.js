const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError } = require("../helpers");

const phoneRegex =
  /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,3}[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,4}$/;
const emailRegex =
  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

const contactSchema = new Schema(
  {
    name: {
      type: String,
      minlength: 3,
      maxlength: 35,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      match: emailRegex,
    },
    phone: {
      type: String,
      match: phoneRegex,
      required: [true, "Set phone for contact"],
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

const contactsSchemaValidation = Joi.object({
  name: Joi.string().min(3).max(35).required().messages({
    "any.required": "Missing required 'name' field",
    "string.min": "The length of 'name' must be between 3 and 35 characters",
    "string.max": "The length of 'name' must be between 3 and 35 characters",
  }),

  email: Joi.string()
    .email()
    .required()
    .messages({ "any.required": "Missing required 'email' field" }),

  phone: Joi.string().pattern(new RegExp(phoneRegex)).required().messages({
    "any.required": "Missing required 'phone' field",
    "string.pattern.base":
      "The phone number format is incorrect. Please enter in the format +XX-XXX-XXX-XX-XX",
  }),

  favorite: Joi.boolean(),
});

const updateFavoriteSchemaValidation = Joi.object({
  favorite: Joi.boolean()
    .required()
    .messages({ "any.required": "missing field favorite" }),
});

const schemes = { contactsSchemaValidation, updateFavoriteSchemaValidation };

contactSchema.post("save", handleMongooseError);

const Contact = model("contact", contactSchema);

module.exports = { Contact, schemes };
