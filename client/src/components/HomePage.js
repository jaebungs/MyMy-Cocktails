import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { createSelector } from 'reselect';
import CocktailCards from './card/CocktailCards';
import { Grid, Container, Input } from '@material-ui/core';
import FilterInputs from './inputs/FilterInputs';
import filterByLiquor from './helpers/filterByLiquor';
import RecipeModal from './modal/RecipeModal';

const HomePage = () => {

  const [openRecipe, setOpenRecipe] = useState();

  // const cocktailsData = useSelector((state)=> state.cocktails);
  const byLiquors = state=> state.filters.homeByLiquors;
  const byName = state=>state.filters.homeByName;

  const filterByLiquors = createSelector (
    state => state.cocktails,
    byName,
    byLiquors,
    filterByLiquor
  )

  const cocktailData = () => {
    const cocktails = useSelector(filterByLiquors);
    return cocktails
  }

  return (
      <Container maxWidth="lg">
        <FilterInputs />
        <h1>Cocktails</h1>
        <Grid container spacing={1}>
          {
            cocktailData().map((cocktail, index) => {
              return <CocktailCards key={index} {...cocktail} setOpenRecipe={setOpenRecipe}/>
            })
          }
          {
            openRecipe && <RecipeModal {...openRecipe} setOpenRecipe={setOpenRecipe} />
          }
        </Grid>
      </Container>

  );
};

export default HomePage;
