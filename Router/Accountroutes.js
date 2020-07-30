const express = require('express');
const router = express.Router();

router.use('/signup', require('../controllers/signup'))
router.use('/login', require('../controllers/login'))


module.exports = router