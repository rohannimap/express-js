const Form = require('../models/Form');


exports.createForm = async (req, res) => {
  try {
    const { title, description, fields } = req.body;
    const newForm = new Form({ title, description, fields });
    await newForm.save();
    res.status(201).json(newForm);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.addField = async (req, res) => {
  try {
    const { formId } = req.params;
    const { type, label, options } = req.body;
    const form = await Form.findById(formId);

    if (!form) {
      return res.status(404).json({ message: 'Form not found' });
    }

    const newField = { type, label, options };
    form.fields.push(newField);
    await form.save();
    res.status(200).json(form);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.submitResponse = async (req, res) => {
  try {
    const { formId } = req.params;
    const form = await Form.findById(formId);

    if (!form) {
      return res.status(404).json({ message: 'Form not found' });
    }

    const { answers } = req.body;  
    form.responses.push({ answers });
    await form.save();
    res.status(201).json({ message: 'Response submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getResponses = async (req, res) => {
  try {
    const { formId } = req.params;
    const form = await Form.findById(formId).select('responses');

    if (!form) {
      return res.status(404).json({ message: 'Form not found' });
    }

    res.status(200).json(form.responses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
