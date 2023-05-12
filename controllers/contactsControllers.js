const { HttpError } = require("../helpers");
const {
  listContactsService,
  getContactByIdService,
  addContactService,
  updateContactService,
  removeContactService,
} = require("../services/contactsServices");

const listContacts = async (req, res, next) => {
  try {
    const contacts = await listContactsService();
    res.json(contacts);
  } catch (error) {
    next(error);
  }
};

const getContactById = async (req, res, next) => {
  const { contactId } = req.params;
  try {
    const contact = await getContactByIdService(contactId);

    if (!contact) {
      throw HttpError(404, `Contact with ${contactId} not found`);
    }

    res.json(contact);
  } catch (error) {
    next(error);
  }
};

const addContact = async (req, res, next) => {
  try {
    const contact = await addContactService(req.body);
    res.status(201).json(contact);
  } catch (error) {
    next(error);
  }
};

const updateContact = async (req, res, next) => {
  const { contactId } = req.params;
  try {
    const contact = await updateContactService(contactId, req.body);
    if (!contact) {
      throw HttpError(404, `Contact with ${contactId} not found`);
    }
    res.status(200).json(contact);
  } catch (error) {
    next(error);
  }
};

const removeContact = async (req, res, next) => {
  const { contactId } = req.params;
  try {
    const removedContact = await removeContactService(contactId);
    if (!removedContact) {
      throw HttpError(404, `Contact with ${contactId} not found`);
    }
    res.status(200).json(removedContact);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  listContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact,
};
