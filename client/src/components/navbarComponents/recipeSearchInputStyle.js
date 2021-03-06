import {makeStyles} from '@material-ui/core/styles';

export const recipeSearchInputStyle = makeStyles({
  recipeSearchInput: {
    width: '10rem',
    margin: '0 1rem'
  },
  helperText: {
    display: 'none'
  },

  '@media (max-width: 780px)': {
    searchIcon: {
      fontSize: '20px'
    },
    recipeSearchInput: {
      width: '9rem',
      margin: '0',
      padding: '0'
    },
  },

  '@media (max-width: 480px)': {
    recipeSearchInput: {
        width: '6rem'
    }
  },

  '@media (max-width: 430px)': {
    recipeSearchInput: {
      width: '7rem'
    },
    searchIcon: {
      fontSize: '15px'
    },
  },
  
});
