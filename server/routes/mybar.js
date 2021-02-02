const express = require('express');
const router = express.Router();
const {authenticateToken} = require('../middleware/authenticateToken');
const {getMyBar, addToMyBar, removeFromMyBar} = require('../controller/mybar');
// routes for '/mybar'

router.get('/', authenticateToken, getMyBar);
router.post('/', authenticateToken, addToMyBar);
router.delete('/', authenticateToken, removeFromMyBar);

module.exports = router;