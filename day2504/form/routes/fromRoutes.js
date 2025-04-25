const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

router.post('/create', formController.createForm);


router.post('/:formId/field', formController.addField);

router.post('/:formId/submit', formController.submitResponse);


router.get('/:formId/responses', formController.getResponses);

module.exports = router;




