import contactsArray from "./mock_data";

let contacts = contactsArray;

let nextId = 4;

const getEmpty = function () {
  return {
    id:0,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    phoneCategory: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    closeFriend: ""};
}

const newContact = function (id, body) {
  return {
    id: id,
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    phone: body.phone,
    phoneCategory: body.phoneCategory,
    address: body.address,
    city: body.city,
    state: body.state,
    zip: body.zip,
    closeFriend: body.closeFriend ? "on" : "",
  };
}

const getContacts = function() {
  return contacts;
}

const createContact = function (body) {
  let contact = newContact(nextId, body);
  nextId += 1;
  contacts.push(contact);
  return contact.id;
}

const getContact = function(id) {
  return contacts.find(element => element.id == id);
}

const updateContact = function(body) {
  let contact = newContact(body.id, body);
  let contactToUpdate = contacts.find(element => element.id == contact.id);
  let index = contacts.indexOf(contactToUpdate);
  contacts[index] = contact;
}

const deleteContact = function (id) {
  let newContacts = contacts.filter(element => element.id != id);
  contacts = newContacts;
}

const Service = {
  getEmpty: getEmpty,
  getContacts: getContacts,
  createContact: createContact,
  getContact: getContact,
  updateContact: updateContact,
  deleteContact: deleteContact,
};

export default Service;