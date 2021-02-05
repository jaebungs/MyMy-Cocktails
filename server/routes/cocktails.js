const express = require('express');
const {getAllCocktails} = require('../controller/cocktails');
const router = express.Router();

// routes in this file starting with /cocktails
router.get('/', getAllCocktails)

module.exports = router;