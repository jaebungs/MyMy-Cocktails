const express = require('express');
const { v4: uuidv4 } = require('uuid');
let Cocktail = require('../models/cocktails');

const router = express.Router();

// routes in this file starting with /cocktails
router.get('/', (req, res) => {
    Cocktail.find()
    .then((cocktail)=> {
        res.json(cocktail);
        console.log('Data retrived')
    })
    .catch((err)=> res.status(400).json(`Error: ${err}`))
})

module.exports = router;