
const contactService = require('../services/contactService');

exports.createContact = async (req, res, next) => {
  try {
    const contactData = { ...req.body, owner: req.user.userId };
    const contact = await contactService.createContact(contactData);
    res.status(201).json(contact);
  } catch (err) {
    next(err);
  }
};

exports.getContacts = async (req, res, next) => {
  try {
    const contacts = await contactService.getContact(req.user.userId);
    res.status(200).json(contacts);
  } catch (err) {
    next(err);
  }
};

exports.updateContact = async (req, res, next) => {
  try {
    const contactId = req.params.id;
    const contact = await contactService.updateContact(contactId, req.body);
    res.status(200).json(contact);
  } catch (err) {
    next(err);
  }
};

exports.deleteContact = async (req, res, next) => {
  try {
    const contactId = req.params.id;
    await contactService.deleteContact(contactId);
    res.status(200).json({ message: 'Contact deleted' });
  } catch (err) {
    next(err);
  }
};
