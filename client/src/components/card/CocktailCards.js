import React from 'react';
import {Grid, Card, CardActionArea, Box, CardContent, Typography } from '@material-ui/core';
import {liquorTypes} from '../../actions/cocktails';
import LiquorChip from './LiquorChip';
import {cardStyles} from './cardStyles';

const CocktailCards = ({_id, name, ingredients, instruction, garnish, setOpenRecipe}) => {
  const classes = cardStyles();

  const handleModal = () => {
    setOpenRecipe({_id, name, ingredients, instruction, garnish});
  };

  const createLiquorChips = (ingredients) => {
    let gingerRemovedIngredients = [];
    let chips = [];
    // Remove Ginger from ingredients
    gingerRemovedIngredients = ingredients.filter(
      (ingredient) => !ingredient.toLowerCase().includes('ginger' || 'gingers')
    );
    // check what ingredietns are listed to create chips.
    gingerRemovedIngredients.forEach((ingredient) => {
      liquorTypes.forEach((liquor) => {
        if (ingredient.toLowerCase().includes(liquor.toLowerCase())) {
          chips.push(liquor);
        }
      });
    });
    return chips;
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <article>
      <CardActionArea  onClick={handleModal}>
        <Card className={classes.card} variant="outlined">
          <Typography className={classes.cardTitle} variant="h2">
            {name}
          </Typography>
          <Box className={classes.chipsContainer} display="flex">
            {createLiquorChips(ingredients).map((liquor, index) => {
              return <LiquorChip key={index} liquor={liquor} />;
            })}
          </Box>
        </Card>
      </CardActionArea>
      </article>
    </Grid>
  );
};

export default CocktailCards;
