import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {liquorTypes} from '../../actions/cocktails';
import {
  searchHomeByName,
  searchHomeByLiquor,
  searchMyByName,
  searchMYByLiquor,
} from '../../actions/filters';
import {
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Chip,
  Input,
  InputAdornment,
  Switch,
  Collapse,
  Grid,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import DoneIcon from '@material-ui/icons/Done';
import {chipStyle} from '../styles/chipColor';
import {filterChipStyle} from './filterChipStyle';

const FilterInputs = ({filterClicked, setFilterClicked}) => {
  const classes = chipStyle();
  const filterChip = filterChipStyle();

  const [checkedTypes, setCheckedTypes] = useState([]);

  const dispatch = useDispatch();
  const pathname = window.location.pathname;

  // When liquor filter clicked, dispatch to pathnamebyLiquor
  useEffect(() => {
    if (pathname === '/library') {
      dispatch(searchHomeByLiquor(checkedTypes));
    } else if (pathname === '/mybar') {
      dispatch(searchMYByLiquor(checkedTypes));
    }
  }, [checkedTypes]);

  // Handle checked liquor filters.
  const handleChipClicked = (liquor) => {
    if (checkedTypes.includes(liquor)) {
      // remove from checkedTypes
      setCheckedTypes(checkedTypes?.filter((type) => type !== liquor));
    } else {
      // add to checkedTypes
      setCheckedTypes((prev) => [...prev, liquor]);
    }
  };

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
    <FormGroup style={{marginBottom: '1rem'}}>
      <Grid
        container
        direction="row"
        justify="flex-end"
        alignItems="center"
        style={{marginBottom: '0.5rem'}}
      >
        <Input
          id="serach"
          variant="outlined"
          onChange={handleTextChange}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </Grid>
      <Box display="flex" flexWrap="wrap">
        {liquorTypes.map((liquor, index) => {
          // convert liquor with no space
          return (
            <Chip
              key={index}
              label={liquor.charAt(0).toUpperCase() + liquor.slice(1)} // first latter Cap
              className={
                checkedTypes.includes(liquor)
                  ? [classes[liquor.replace(/\s/g, '')], filterChip.checked].join(' ')
                  : filterChip.chip
              }
              onClick={() => handleChipClicked(liquor)}
              clickable
              disableRipple
              disablefocusripple="true"
              variant="outlined"
            />
          );
        })}
      </Box>
    </FormGroup>
  );
};

export default FilterInputs;
