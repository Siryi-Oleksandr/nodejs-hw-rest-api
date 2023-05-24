const express = require("express");
const {
  getContacts,
  getContactById,
  addContact,
  updateContact,
  updateStatusContact,
  removeContact,
} = require("../../controllers/contactsControllers");
const { isValidId, isValidBody, authenticate } = require("../../middlewares");
const {
  joiContactsSchemaValidation,
  joiUpdateStatusSchemaValidation,
} = require("../../helpers/joiSchemaValidation");

const router = express.Router();

router.get("/", authenticate, getContacts);

router.get("/:contactId", authenticate, isValidId, getContactById);

router.post(
  "/",
  authenticate,
  isValidBody(joiContactsSchemaValidation),
  addContact
);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  isValidBody(joiContactsSchemaValidation),
  updateContact
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  isValidBody(joiUpdateStatusSchemaValidation),
  updateStatusContact
);

router.delete("/:contactId", authenticate, isValidId, removeContact);

module.exports = router;
