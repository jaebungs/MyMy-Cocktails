import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import FilterChipInput from './inputs/FilterChipInput';
import filterLiquorHelper from './helpers/filterLiquorHelper';
import CocktailCards from './card/CocktailCards';
import RecipeModal from './modal/RecipeModal';
import { Grid, Container, Grow } from '@material-ui/core';

const MyBarPage = () => {

    const [openRecipe, setOpenRecipe] = useState();

    const byLiquors = state=> state.filters.barByLiquors;
    const byName = state=>state.filters.barByName;
  
    const filterLiquors = createSelector (
      state => state.myBar,
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
        <FilterChipInput />
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