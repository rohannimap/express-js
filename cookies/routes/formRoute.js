const express = require('express');
const router = express.Router();
const formController = require('../controllers/form');

router.post('/forms', formController.createForm);
router.get('/forms/:id', formController.getForm);
router.post('/forms/:id/submit', formController.submitResponse);

module.exports = router;
