import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {searchByShakeInput} from '../../actions/filters';
import {TextField, InputAdornment} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import {liquorTypes} from '../../actions/cocktails';
import {searchStyles} from './searchStyles';

const ShakeSearchInput = ({openRecipe, handleShowCocktail}) => {
  const classes = searchStyles();
  const dispatch = useDispatch();
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  const [cursor, setCursor] = useState(-1);

  const inputReduxValue = useSelector((state) => state.filters.shakeInput)[0];

  useEffect(() => {
    if (openRecipe) {
      setSearchSuggestion([]);
    }
  }, [openRecipe]);

  const handleTextChange = (e) => {
    const result = [];
    const value = e.target.value.toLowerCase().trim(); //remove space .replace(/\s/g, '');

    liquorTypes.forEach((liquor) => {
      // Check if first letters are same as input typed.
      const wordsSplit = liquor.toLowerCase().split(' ');
      wordsSplit.forEach((word) => {
        if ((word.charAt(0) === value.charAt(0)) & word.includes(value)) {
          result.push(liquor);
        }
      });
    });

    setSearchSuggestion(result);
    dispatch(searchByShakeInput(e.target.value));
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13 || e.keyCode === 32) {
      // Enter key or Space key
      e.keyCode === 13 & cursor === -1 && handleShowCocktail();
      // if cursor is on the suggestion results, select focused suggestion.
      if (cursor >= 0) {
        e.preventDefault();
        dispatch(searchByShakeInput(searchSuggestion[cursor]));
        setCursor(-1);
        setSearchSuggestion([]);
      }
    } else if (e.keyCode === 38) {
      // up arrow key
      e.preventDefault();

      if (cursor > 0) {
        setCursor(cursor - 1);
      }
      if (cursor === 0) {
        setCursor(-1);
      }
      if (cursor === -1) {
        setCursor(searchSuggestion.length - 1);
      }
    } else if (e.keyCode === 40) {
      // down arrow key
      e.preventDefault();
      if (searchSuggestion.length > 0) {
        setCursor(cursor + 1);
        if (cursor >= searchSuggestion.length - 1) {
          setCursor(0);
        }
      }
    }
  };

  const handleClick = (e) => {
    dispatch(searchByShakeInput(e.target.id));
  };

  const handleMouseEnter = (index) => {
    setCursor(index);
  };

  return (
    <div className={classes.container}>
      <label>
      <TextField
        className={classes.textfield}
        onChange={handleTextChange}
        autoComplete="off"
        variant="outlined"
        id="cocktail-shaker-search-input"
        aria-label="cocktail-shaker-search-input"
        value={inputReduxValue}
        size="small"
        onKeyDown={onKeyDown}
        InputProps={{
          endAdornment: (
            <InputAdornment aria-label="icon">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      </label>
      <div id="number-of-suggestions" className={classes.suggestion}>Suggestion list. total of {searchSuggestion.length} suggestions.</div>
      <div>
        <ul className={classes.dropdownContainer} aria-label="autoComplete" aria-describedby="number-of-suggestions" aria-expanded="true" role="listbox">
          {searchSuggestion.length > 0 &&
            searchSuggestion.map((suggestion, index) => {
              let multipleClassName;
              if (cursor === index) {
                multipleClassName = [classes.dropdownList, classes.active].join(' ');
              } else {
                multipleClassName = classes.li;
              }
              return (
                <li
                  role="option"
                  id={suggestion}
                  key={index}
                  index={index}
                  className={multipleClassName}
                  onClick={handleClick}
                  onMouseEnter={() => handleMouseEnter(index)}
                >
                  {suggestion}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default ShakeSearchInput;
