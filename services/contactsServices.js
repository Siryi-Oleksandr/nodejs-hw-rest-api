const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(process.cwd(), "db", "contacts.json");

const listContactsService = async () => {
  const contacts = await fs.readFile(contactsPath);
  return JSON.parse(contacts);
};

const getContactByIdService = async (contactId) => {
  const contacts = await listContactsService();
  return contacts.find((el) => el.id === contactId);
};

const removeContactService = async (contactId) => {};

const addContactService = async (body) => {};

const updateContactService = async (contactId, body) => {};

module.exports = {
  listContactsService,
  getContactByIdService,
  removeContactService,
  addContactService,
  updateContactService,
};
