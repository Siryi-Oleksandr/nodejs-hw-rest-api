const { HttpError, contactsSchemaValidation } = require("../helpers");
// const {
//   listContactsService,
//   getContactByIdService,
//   addContactService,
//   updateContactService,
//   removeContactService,
// } = require("../services/contactsServices");

const Contact = require("../models/contact");

// *  /api/contacts
const listContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    next(error);
  }
};

// const getContactById = async (req, res, next) => {
//   const { contactId } = req.params;
//   try {
//     const contact = await getContactByIdService(contactId);

//     if (!contact) {
//       throw new HttpError(404, `Contact with ${contactId} not found`);
//     }

//     res.json(contact);
//   } catch (error) {
//     next(error);
//   }
// };

const addContact = async (req, res, next) => {
  try {
    const { error } = contactsSchemaValidation.validate(req.body);
    if (error) {
      throw new HttpError(400, error.message);
    }
    const contact = await Contact.create(req.body);
    res.status(201).json(contact);
  } catch (error) {
    next(error);
  }
};

// const updateContact = async (req, res, next) => {
//   const { contactId } = req.params;
//   try {
//     const { error } = contactsSchemaValidation.validate(req.body);
//     if (error) {
//       throw new HttpError(400, error.message);
//     }
//     const contact = await updateContactService(contactId, req.body);
//     if (!contact) {
//       throw new HttpError(404, `Contact with ${contactId} not found`);
//     }
//     res.json(contact);
//   } catch (error) {
//     next(error);
//   }
// };

// const removeContact = async (req, res, next) => {
//   const { contactId } = req.params;
//   try {
//     const removedContact = await removeContactService(contactId);
//     if (!removedContact) {
//       throw new HttpError(404, `Contact with ${contactId} not found`);
//     }
//     res.json({ message: "contact deleted" });
//   } catch (error) {
//     next(error);
//   }
// };

module.exports = {
  listContacts,
  // getContactById,
  addContact,
  // updateContact,
  // removeContact,
};
