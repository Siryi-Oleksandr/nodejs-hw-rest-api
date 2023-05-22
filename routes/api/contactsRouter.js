const express = require("express");
const {
  getContacts,
  getContactById,
  addContact,
  updateContact,
  updateStatusContact,
  removeContact,
} = require("../../controllers/contactsControllers");
const { isValidId, isValidBody } = require("../../middlewares");
const {
  joiContactsSchemaValidation,
  joiUpdateStatusSchemaValidation,
} = require("../../helpers/joiSchemaValidation");

const router = express.Router();

router.get("/", getContacts);

router.get("/:contactId", isValidId, getContactById);

router.post("/", isValidBody(joiContactsSchemaValidation), addContact);

router.put(
  "/:contactId",
  isValidId,
  isValidBody(joiContactsSchemaValidation),
  updateContact
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  isValidBody(joiUpdateStatusSchemaValidation),
  updateStatusContact
);

router.delete("/:contactId", isValidId, removeContact);

module.exports = router;
