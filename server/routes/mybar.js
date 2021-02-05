const express = require('express');
const router = express.Router();
const {authenticateToken} = require('../middleware/authenticateToken');
const {addToMyBar, removeFromMyBar} = require('../controller/mybar');
// routes for '/mybar'

router.post('/', authenticateToken, addToMyBar);
router.delete('/', authenticateToken, removeFromMyBar);

module.exports = router;