import React from 'react';
import {InputBase, TextField, InputAdornment} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import {shakeStyles} from './shakeStyles';

const ShakeSearchInput = () => {
  const classes = shakeStyles();

  const handleTextChange = () => {};

  return (
    <TextField
      className={classes.textfield}
      variant="outlined"
      size='small'
      InputProps={{
        endAdornment: (
          <InputAdornment >
            <SearchIcon />
          </InputAdornment>
        )
      }}
    />
  );
};

export default ShakeSearchInput;
