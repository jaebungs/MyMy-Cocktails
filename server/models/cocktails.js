const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cocktailsSchema = new Schema({
    name: String,
    ingredients: [String],
    Instruction: String,
    garnish: String
})

const Cocktail = mongoose.model('CocktailAPI', cocktailsSchema, 'cocktail');

module.exports = Cocktail;