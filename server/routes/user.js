const express = require('express');
const {signin, signup} = require('../controller/user');
const router = express.Router();
// routes for '/user'

router.post('/signin', signin);
router.post('/signup', signup);

module.exports = router;