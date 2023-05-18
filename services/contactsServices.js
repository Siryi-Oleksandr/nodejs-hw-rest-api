// const fs = require("fs/promises");
// const { nanoid } = require("nanoid");
// const path = require("path");

// const contactsPath = path.join(process.cwd(), "db", "contacts.json");
// const updateContacts = (contacts) =>
//   fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

// const listContactsService = async () => {
//   const contacts = await Contact.find();
//   console.log(contacts);
//   return contacts;
// };

// const getContactByIdService = async (contactId) => {
//   const contacts = await listContactsService();
//   const contact = contacts.find((el) => el.id === contactId);
//   return contact || null;
// };

// const removeContactService = async (contactId) => {
//   const contacts = await listContactsService();
//   const contactIdx = contacts.findIndex((el) => el.id === contactId);
//   if (contactIdx === -1) {
//     return null;
//   }
//   const [deletedContact] = contacts.splice(contactIdx, 1);
//   await updateContacts(contacts);
//   return deletedContact;
// };

// const addContactService = async (body) => {
//   const contacts = await listContactsService();
//   const contact = {
//     id: nanoid(),
//     ...body,
//   };
//   contacts.push(contact);
//   await updateContacts(contacts);
//   return contact;
// };

// const updateContactService = async (contactId, body) => {
//   const contacts = await listContactsService();
//   const contactIdx = contacts.findIndex((el) => el.id === contactId);
//   if (contactIdx === -1) {
//     return null;
//   }
//   const updatedContact = {
//     id: contactId,
//     ...body,
//   };
//   contacts.splice(contactIdx, 1, updatedContact);
//   await updateContacts(contacts);
//   return updatedContact;
// };

// module.exports = {
//   listContactsService,
//   getContactByIdService,
//   removeContactService,
//   addContactService,
//   updateContactService,
// };
