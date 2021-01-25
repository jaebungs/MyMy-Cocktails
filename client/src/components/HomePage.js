import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import CocktailCards from './card/CocktailCards';
import {storeAllCocktails} from '../actions/cocktails';
import { Grid, Container } from '@material-ui/core';
import RecipeModal from './modal/RecipeModal';

const HomePage = () => {

  const [openRecipe, setOpenRecipe] = useState();
  const dispatch = useDispatch();
  const cocktailsData = useSelector((state)=> state.cocktails);

  useEffect(() => {
    fetch('http://localhost:5000/cocktails')
      .then((res) => res.json())
      .then((data) => {
        dispatch(storeAllCocktails(data));
      })
      .catch((err) => console.log('fetch error', err));
  }, []);

  return (
      <Container maxWidth="lg">
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
