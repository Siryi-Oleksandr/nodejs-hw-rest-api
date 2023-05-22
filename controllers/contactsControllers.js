const { HttpError } = require("../helpers/");
const Contact = require("../models/contact");
const controllerWrapper = require("../helpers/controllerWrapper");

// *******************  /api/contacts  ******************

const getContacts = controllerWrapper(async (req, res) => {
  const contacts = await Contact.find({}, "-createdAt -updatedAt");
  res.json(contacts);
});

const getContactById = controllerWrapper(async (req, res) => {
  const { contactId } = req.params;
  const contact = await Contact.findById(contactId);

  if (!contact) {
    throw new HttpError(404, `Contact with ${contactId} not found`);
  }

  res.json(contact);
});

const addContact = controllerWrapper(async (req, res) => {
  const contact = await Contact.create(req.body);
  res.status(201).json(contact);
});

const updateContact = controllerWrapper(async (req, res) => {
  const { contactId } = req.params;
  const contact = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!contact) {
    throw new HttpError(404, `Contact with ${contactId} not found`);
  }
  res.json(contact);
});

const updateStatusContact = controllerWrapper(async (req, res) => {
  const { contactId } = req.params;
  const contact = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!contact) {
    throw new HttpError(404, `Contact with ${contactId} not found`);
  }
  res.json(contact);
});

const removeContact = controllerWrapper(async (req, res) => {
  const { contactId } = req.params;
  const removedContact = await Contact.findByIdAndRemove(contactId);
  if (!removedContact) {
    throw new HttpError(404, `Contact with ${contactId} not found`);
  }
  res.json({ message: "contact deleted" });
});

module.exports = {
  getContacts,
  getContactById,
  addContact,
  updateContact,
  updateStatusContact,
  removeContact,
};
