import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {createSelector} from 'reselect';
import {Box, Typography, Button} from '@material-ui/core';
import ShakeSearchInput from './shakeComponents/ShakeSearchInput';
import filterLiquorHelper from './helpers/filterLiquorHelper';
import RecipeModal from './modal/RecipeModal';
import {shakeStyles} from './shakeComponents/shakeStyles';
import CocktailSVG from './icons/CocktailSVG';
import CocktailNotfoundSVG from './icons/CocktailNotfoundSVG';

const ShakePage = () => {
  const classes = shakeStyles();

  const [openRecipe, setOpenRecipe] = useState();
  const [error, setError] = useState(false);

  const byInput = (state) => state.filters.shakeInput;

  const filterLiquors = createSelector(
    (state) => state.cocktails,
    () => {},
    byInput,
    filterLiquorHelper
  );
  const cocktails = useSelector(filterLiquors);
  const inputReduxValue = useSelector((state) => state.filters.shakeInput)[0];

  const handleShowCocktail = () => {
    // get random cocktail from filtered cocktails (useSelector results)
    if (cocktails.length > 0 & inputReduxValue.length !== 0) {
      const randomNumber = Math.floor(Math.random() * cocktails.length);
      const randomCocktail = cocktails[randomNumber];
      setOpenRecipe({...randomCocktail});
    }
    // when search bar is emprty
    if (inputReduxValue.length === 0 || cocktails.length === 0) {
      setError(true);
      setOpenRecipe(null);
    } else {
      setError(false)
    }
  };

  return (
    <div className={classes.shakeContainer}>
      {!error ? (
        <div className={classes.shakeImage}>
          <CocktailSVG />
        </div>
      ) : (
        <div className={classes.shakeImage}>
          <CocktailNotfoundSVG />
        </div>
      )}

      <Typography variant="h2" className={classes.shakeTitle}>
        {!error ? 'The Cocktail Shaker' : 'Ah oh, we coudln`t find anything'}
      </Typography>
      <Typography variant="subtitle1" className={classes.shakeSubTitle}>
        {!error
          ? 'You give us an ingredient, we give you a recipe for cocktail'
          : 'Try different ingredent'}
      </Typography>
      <Box display="flex" flexWrap="wrap" alignItems="center" mt={2} className={classes.searchContainer}>
        <ShakeSearchInput openRecipe={openRecipe} handleShowCocktail={handleShowCocktail} />
        <Button className={classes.shakeButton} onClick={handleShowCocktail}>
          SHAKE IT
        </Button>
      </Box>
      {openRecipe && <RecipeModal {...openRecipe} setOpenRecipe={setOpenRecipe} handleShowCocktail={handleShowCocktail} />}
    </div>
  );
};

export default ShakePage;
