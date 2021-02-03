import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {createSelector} from 'reselect';
import {Container, Grid, Box, Typography, Button} from '@material-ui/core';
import ShakeSearchInput from './shakeComponents/ShakeSearchInput';
import filterLiquorHelper from './helpers/filterLiquorHelper';
import {searchByShakeInput} from '../actions/filters';
import RecipeModal from './modal/RecipeModal';
import {shakeStyles} from './shakeComponents/shakeStyles';
import CocktailSVG from './icons/CocktailSVG';
import CocktailNotfoundSVG from './icons/CocktailNotfoundSVG';

const ShakePage = () => {
  const classes = shakeStyles();
  const dispatch = useDispatch();

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
  const input = useSelector(state => state.filters.shakeInput)[0];
  const inputReduxValue = useSelector((state) => state.filters.shakeInput)[0];

  const handleShowCocktail = () => {
    // get random cocktail from filtered cocktails (useSelector results)
    if (cocktails.length > 0 & inputReduxValue.length !== 0) {
      const randomNumber = Math.floor(Math.random() * cocktails.length);
      const randomCocktail = cocktails[randomNumber];
      setOpenRecipe({...randomCocktail});
      setError(false);
      dispatch(searchByShakeInput(''));
    }
    // when search bar is emprty
    if (inputReduxValue.length === 0 || cocktails.length === 0) {
      setError(true);
      setOpenRecipe(null);
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
        {!error ? 'The Cocktail Shaker' : 'Ah oh, we coudln`t find anything.'}
      </Typography>
      <Typography variant="subtitle1" className={classes.shakeSubTitle}>
        {!error
          ? 'You give us an ingredient, we give you a recipe for cocktail'
          : 'Try different ingredent'}
      </Typography>
      <ShakeSearchInput openRecipe={openRecipe} />
      <Button size="small" className={classes.shakeButton} onClick={handleShowCocktail}>
        SHAKE IT
      </Button>
      {openRecipe && <RecipeModal {...openRecipe} setOpenRecipe={setOpenRecipe} />}
    </div>
  );
};

export default ShakePage;
