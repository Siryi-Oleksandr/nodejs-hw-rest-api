const {
  listContactsService,
  getContactByIdService,
} = require("../services/contactsServices");

const listContacts = async (req, res, next) => {
  const contacts = await listContactsService();
  res.json(contacts);
};

const getContactById = async (req, res, next) => {
  const contact = await getContactByIdService(req.params.contactId);

  res.json(contact);
};

module.exports = { listContacts, getContactById };

// listContacts,
// getContactById,
// removeContact,
// addContact,
// updateContact,
