const formService = require('../services/form');

const createForm = async (req, res) => {
  try {
    const form = await formService.createForm(req.body);
    res.status(201).json(form);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getForm = async (req, res) => {
  try {
    const form = await formService.getFormById(req.params.id);
    if (!form) return res.status(404).json({ message: "Form not found" });
    res.json(form);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const submitResponse = async (req, res) => {
  try {
    const response = await formService.submitFormResponse(req.params.id, req.body);
    res.status(201).json(response);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createForm,
  getForm,
  submitResponse
};
