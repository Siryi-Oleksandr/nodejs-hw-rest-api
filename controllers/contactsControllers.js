const { HttpError } = require("../helpers/");
const Contact = require("../models/contact");
const joiSchemes = require("../helpers/joiSchemaValidation");

// *******************  /api/contacts  ******************

const getContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find({}, "-createdAt -updatedAt");
    res.json(contacts);
  } catch (error) {
    next(error);
  }
};

const getContactById = async (req, res, next) => {
  const { contactId } = req.params;
  try {
    const contact = await Contact.findById(contactId);

    if (!contact) {
      throw new HttpError(404, `Contact with ${contactId} not found`);
    }

    res.json(contact);
  } catch (error) {
    next(error);
  }
};

const addContact = async (req, res, next) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json(contact);
  } catch (error) {
    next(error);
  }
};

const updateContact = async (req, res, next) => {
  const { contactId } = req.params;
  try {
    const contact = await Contact.findByIdAndUpdate(contactId, req.body, {
      new: true,
    });
    if (!contact) {
      throw new HttpError(404, `Contact with ${contactId} not found`);
    }
    res.json(contact);
  } catch (error) {
    next(error);
  }
};

const updateStatusContact = async (req, res, next) => {
  const { contactId } = req.params;
  try {
    const { error } = joiSchemes.joiUpdateFavoriteSchemaValidation.validate(
      req.body
    );
    if (error) {
      throw new HttpError(400, error.message);
    }
    const contact = await Contact.findByIdAndUpdate(contactId, req.body, {
      new: true,
    });
    if (!contact) {
      throw new HttpError(404, `Contact with ${contactId} not found`);
    }
    res.json(contact);
  } catch (error) {
    next(error);
  }
};

const removeContact = async (req, res, next) => {
  const { contactId } = req.params;
  try {
    const removedContact = await Contact.findByIdAndRemove(contactId);
    if (!removedContact) {
      throw new HttpError(404, `Contact with ${contactId} not found`);
    }
    res.json({ message: "contact deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getContacts,
  getContactById,
  addContact,
  updateContact,
  updateStatusContact,
  removeContact,
};
