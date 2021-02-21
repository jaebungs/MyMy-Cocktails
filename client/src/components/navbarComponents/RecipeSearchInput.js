import React from 'react';
import {useDispatch} from 'react-redux';
import {searchHomeByName, searchMyByName} from '../../actions/filters';
import {FormControl, Input, InputAdornment, FormHelperText  } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import {recipeSearchInputStyle} from './recipeSearchInputStyle';

const RecipeSearchInput = () => {
  const dispatch = useDispatch();
  const pathname = window.location.pathname;

  const classes = recipeSearchInputStyle();

  // hanlde text typed in the search box
  const handleTextChange = (e) => {
    const text = e.target.value;
    if (pathname === '/library') {
      dispatch(searchHomeByName(text));
    } else if (pathname === '/mybar') {
      dispatch(searchMyByName(text));
    }
  };

  return (
    <FormControl>
      <label>
    <Input
      id="cocktails-serach-by-name-input"
      variant="outlined"
      aria-label="recipe-search-input"
      aria-describedby="cocktails-serach-by-name-input-text"
      className={classes.recipeSearchInput}
      onChange={handleTextChange}
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon className={classes.searchIcon}/>
        </InputAdornment>
      }
    />
    </label>
    <FormHelperText className={classes.helperText} id="cocktails-serach-by-name-input-text">Search cocktail by name here.</FormHelperText>
    </FormControl>

  );
};

export default RecipeSearchInput;
