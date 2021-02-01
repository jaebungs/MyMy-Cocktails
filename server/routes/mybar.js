const express = require('express');
const router = express.Router();
const {authenticateToken} = require('../middleware/authenticateToken');
const {getMyBar, addToMyBar} = require('../controller/mybar');
// routes for '/mybar'

router.get('/', authenticateToken, getMyBar);
router.post('/', authenticateToken, addToMyBar);

module.exports = router;