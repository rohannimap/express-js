const express = require('express');
const  authMiddleware = require('../middleware/authMiddleware');
const contactController = require('../controllers/contactController');
const router = express.Router();

router.post('/', authMiddleware.auth, contactController.createContact);
router.get('/', authMiddleware.auth, contactController.getContacts);
router.put('/:id', authMiddleware.auth, contactController.updateContact);
router.delete('/:id', authMiddleware.auth, contactController.deleteContact);

module.exports = router;
