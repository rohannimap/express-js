const express = require('express');
const router = express.Router();
const { getTimes } = require('../controllers/time');

router.get('/', getTimes);

module.exports = router;
