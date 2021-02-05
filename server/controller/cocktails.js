const Cocktail = require('../models/cocktails');

const getAllCocktails = async (req, res) => {
    try {
        const cocktail = await Cocktail.find();
        if (!cocktail) return res.status(404).json({message: `Cocktail database is empty or has an error.`});
        console.log(cocktail)
        res.status(200).json(cocktail);
        
    } catch (err) {
        res.status(500).json({message: 'Retriving Cocktails error'});
    }
  };

module.exports = {getAllCocktails};