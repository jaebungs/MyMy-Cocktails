import React from 'react';
import {Container, Grid, Box, Typography, Button} from '@material-ui/core';
import ShakeSearchInput from './shakeComponents/ShakeSearchInput';
import {shakeStyles} from './shakeComponents/shakeStyles';
import CocktailSVG from './icons/CocktailSVG';
import CocktailNotfoundSVG from './icons/CocktailNotfoundSVG';

const ShakePage = () => {
  const classes = shakeStyles();

  return (
    <div className={classes.shakeContainer}>
        <div className={classes.shakeImage}>
            <CocktailSVG />
        </div>
          <Typography variant="h2" className={classes.shakeTitle}>The Cocktail Shaker</Typography>
          <Typography variant="subtitle1" className={classes.shakeSubTitle}>
            You give us an ingredient, we give you a recipe for cocktail
          </Typography>
          <ShakeSearchInput />
          <Button size="small" className={classes.shakeButton}>SHAKE IT</Button>
    </div>
          

  );
};

export default ShakePage;
