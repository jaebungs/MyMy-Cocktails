import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import FilterInputs from './inputs/FilterInputs';
import filterLiquorHelper from './helpers/filterLiquorHelper';
import CocktailCards from './card/CocktailCards';
import RecipeModal from './modal/RecipeModal';
import { Grid, Container, Grow } from '@material-ui/core';

const MyBarPage = () => {

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
                <Grow key={index} >
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
    )
}

export default MyBarPage;