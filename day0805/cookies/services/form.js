const Form = require('../models/form');
const Response = require('../models/');

const createForm = async (formData) => {
  const form = new Form(formData);
  return await form.save();
};

const getFormById = async (id) => {
  return await Form.findById(id);
};

const submitFormResponse = async (formId, responseData) => {
  const response = new Response({ formId, data: responseData });
  return await response.save();
};

module.exports = {
  createForm,
  getFormById,
  submitFormResponse
};
