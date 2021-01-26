import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import CocktailCards from './card/CocktailCards';
import { Grid, Container } from '@material-ui/core';
import FilterButton from './inputs/filterButton';
import RecipeModal from './modal/RecipeModal';

const HomePage = () => {

  const [openRecipe, setOpenRecipe] = useState();

  const cocktailsData = useSelector((state)=> state.cocktails);

  return (
      <Container maxWidth="lg">
        <FilterButton />
        <h1>Cocktails</h1>
        <Grid container spacing={1}>
          {
            cocktailsData.map((cocktail, index) => {
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
