import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {createSelector} from 'reselect';
import FilterChipInput from './filterChip/FilterChipInput';
import filterLiquorHelper from './helpers/filterLiquorHelper';
import CocktailCards from './card/CocktailCards';
import RecipeModal from './modal/RecipeModal';
import NothingFound from './NothingFound';
import {Grid, Container, Grow, Box, Typography} from '@material-ui/core';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';

const MyBarPage = () => {
  const [openRecipe, setOpenRecipe] = useState();

  const byLiquors = (state) => state.filters.barByLiquors;
  const byName = (state) => state.filters.barByName;

  const filterLiquors = createSelector(
    (state) => state.myBar,
    byName,
    byLiquors,
    filterLiquorHelper
  );
  const cocktails = useSelector(filterLiquors);

  return (
    <Container maxWidth="lg">
      <FilterChipInput />
      <Grid container spacing={1}>
        {cocktails.map((cocktail, index) => {
          return (
            <Grow key={index}>
              <CocktailCards {...cocktail} setOpenRecipe={setOpenRecipe} />
            </Grow>
          );
        })}
        {cocktails.length === 0 && <NothingFound />}
        {openRecipe && <RecipeModal {...openRecipe} setOpenRecipe={setOpenRecipe} />}
      </Grid>
    </Container>
  );
};

export default MyBarPage;
