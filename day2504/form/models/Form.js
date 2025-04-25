const mongoose = require('mongoose');


const fieldSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['text', 'select', 'checkbox', 'radio'],
    required: true
  },
  label: { type: String, required: true },
  options: [String],  
});

const formSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  fields: [fieldSchema],  
  responses: [
    {
      answers: [{ type: mongoose.Schema.Types.Mixed }],
      createdAt: { type: Date, default: Date.now },
    },
  ],
});

const Form = mongoose.model('Form', formSchema);
module.exports = Form;
