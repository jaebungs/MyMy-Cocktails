import React from 'react';

import {Box, Typography} from '@material-ui/core';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';

function NothingFound() {
  return (
    <Box my={7} m="auto" display="flex">
      <Typography variant="body1">No cocktails found...</Typography>
      <SentimentDissatisfiedIcon />
    </Box>
  );
}

export default NothingFound;
