import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { createSelector } from 'reselect';
import CocktailCards from './card/CocktailCards';
import { Grid, Container, Input, Grow } from '@material-ui/core';
import FilterInputs from './inputs/FilterInputs';
import filterLiquorHelper from './helpers/filterLiquorHelper';
import RecipeModal from './modal/RecipeModal';
import { bodyStyle } from './styles/homePageStyle';

const HomePage = () => {
  const classes = bodyStyle();

  const [openRecipe, setOpenRecipe] = useState();

  // const cocktailsData = useSelector((state)=> state.cocktails);
  const byLiquors = state=> state.filters.homeByLiquors;
  const byName = state=>state.filters.homeByName;

  const filterLiquors = createSelector (
    state => state.cocktails,
    byName,
    byLiquors,
    filterLiquorHelper
  )

  const cocktailData = () => {
    const cocktails = useSelector(filterLiquors);
    return cocktails
  }

  return (
      <Container maxWidth="lg">
        <FilterInputs />
        <Grid container spacing={1}>
          {
            cocktailData().map((cocktail, index) => {
              return (
                <Grow key={index} in={!!cocktail} style={{ transformOrigin: '0 0 0' }} {...(!!cocktail ? { timeout: 1000 } : {})}>
                  <CocktailCards {...cocktail} setOpenRecipe={setOpenRecipe}/>
                </Grow>
                )
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
