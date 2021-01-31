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
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const pathname = window.location.pathname;

  // When liquor filter clicked, dispatch to pathnamebyLiquor
  useEffect(() => {
    if (pathname === '/') {
      dispatch(searchHomeByLiquor(checkedTypes));
    } else if (pathname === '/mybar') {
      dispatch(searchMYByLiquor(checkedTypes));
    }
  }, [checkedTypes]);

  const showFilterBox = () => {
    setShow(!show);
  };

  // Handle checked liquor filters.
  const handleChange = (e) => {
    const liquor = e.target.value;

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
    if (pathname === '/') {
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
        <FormControlLabel
          control={
            <Switch checked={show} color="primary" onChange={showFilterBox} position="right" />
          }
          label="Show Filters"
        />
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
      <Collapse in={show}>
        <Box display="flex" flexWrap="wrap" align-items="center" ml={5}>
          {liquorTypes.map((liquor, index) => {
            // convert liquor with no space
            return (
              <FormControlLabel
                className={[classes[liquor.replace(/\s/g, '')], filterChip.filterChip].join(' ')}
                size="small"
                control={
                  <Checkbox
                    // I wanted to put onChange to parent's of Checkbox...
                    checked={checkedTypes.includes(liquor) ? true : false}
                    className={checkedTypes.includes(liquor) ? filterChip.checked : 'none'}
                    onChange={handleChange}
                    value={liquor}
                    color="primary"
                    name={liquor}
                    icon={<DoneIcon />}
                    checkedIcon={<DoneIcon />}
                  />
                }
                label={liquor.charAt(0).toUpperCase() + liquor.slice(1)} // first latter Cap
                key={index}
              />
            );
          })}
        </Box>
      </Collapse>
    </FormGroup>
  );
};

export default FilterInputs;
