import React from 'react';
import {useDispatch} from 'react-redux';
import {searchHomeByName, searchMyByName} from '../../actions/filters';
import {Input, InputAdornment} from '@material-ui/core';
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
    <Input
      id="serach"
      variant="outlined"
      className={classes.recipeSearchInput}
      onChange={handleTextChange}
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon className={classes.searchIcon}/>
        </InputAdornment>
      }
    />
  );
};

export default RecipeSearchInput;
