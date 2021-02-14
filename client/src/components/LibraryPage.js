import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {createSelector} from 'reselect';
import CocktailCards from './card/CocktailCards';
import {Grid, Container} from '@material-ui/core';
import FilterChipInput from './filterChip/FilterChipInput';
import filterLiquorHelper from './helpers/filterLiquorHelper';
import NothingFound from './NothingFound';
import RecipeModal from './modal/RecipeModal';

const LibraryPage = () => {
  const [openRecipe, setOpenRecipe] = useState();

  const byLiquors = (state) => state.filters.homeByLiquors;
  const byName = (state) => state.filters.homeByName;

  const filterLiquors = createSelector(
    (state) => state.cocktails,
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
          return <CocktailCards key={index} {...cocktail} setOpenRecipe={setOpenRecipe} />;
        })}
        {cocktails.length === 0 && <NothingFound />}
        {openRecipe && <RecipeModal {...openRecipe} setOpenRecipe={setOpenRecipe} />}
      </Grid>
    </Container>
  );
};

export default LibraryPage;
