const express = require("express");
const {
  getContacts,
  getContactById,
  addContact,
  updateContact,
  updateStatusContact,
  removeContact,
} = require("../../controllers/contactsControllers");
const isValidId = require("../../middlewares/isValidId");
const isValidBody = require("../../middlewares/isValidBody");

const router = express.Router();

router.get("/", getContacts);

router.get("/:contactId", isValidId, getContactById);

router.post("/", isValidBody, addContact);

router.put("/:contactId", isValidId, isValidBody, updateContact);

router.patch("/:contactId/favorite", isValidId, updateStatusContact);

router.delete("/:contactId", isValidId, removeContact);

module.exports = router;
