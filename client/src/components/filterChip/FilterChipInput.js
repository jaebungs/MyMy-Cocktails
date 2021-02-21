import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {liquorTypes} from '../../actions/cocktails';
import {searchHomeByLiquor, searchMYByLiquor} from '../../actions/filters';
import {Box, FormGroup, Chip} from '@material-ui/core';
import {chipStyle} from '../styles/chipColor';
import {filterChipStyle} from './filterChipStyle';

const FilterChipInput = () => {
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

  const handleClearAllCliecked = () => {
    setCheckedTypes([]);
  }

  return (
    <FormGroup style={{marginBottom: '1rem'}}>
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
        <Chip 
          label='Clear All'
          onClick={handleClearAllCliecked}
          className={filterChip.clear}
          clickable={false}
        />
      </Box>
    </FormGroup>
  );
};

export default FilterChipInput;
