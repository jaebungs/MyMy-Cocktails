import React from 'react';
import {Grid, TextField} from '@material-ui/core';

// Custom components for Input
const Input = ({name, size, type, label, placeholder, handleChange, autoFocus}) => {
  return (
    <Grid item xs={12} sm={size ? parseInt(size) : 12}>
      <TextField
        name={name}
        type={type}
        labe={label}
        placeholder={placeholder}
        onChange={handleChange}
        autoFocus={autoFocus}
        variant="outlined"
        required
        fullWidth
      />
    </Grid>
  );
};

export default Input;
