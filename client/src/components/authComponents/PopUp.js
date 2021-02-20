import React from 'react';
import {useSelector} from 'react-redux';
import {Collapse} from '@material-ui/core';
import {Alert, AlertTitle} from '@material-ui/lab';

const PopUp = ({ popUp, googleLogin, googleError}) => {
  
    const message = useSelector((state) => state.auth?.message);
  
  return (
    <Collapse in={popUp}>
      {(!!message || !!googleError) && !googleLogin && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {message && <strong>{message}</strong>}
          {googleError && <strong>{googleError}</strong>}
        </Alert>
      )}

      {( googleLogin && !message ) && (
        <Alert severity="success">
          <AlertTitle>Logging in...</AlertTitle>
        </Alert>
      )}
      {( googleLogin && message ) && (
        <Alert severity="error">{message && <strong>{message}</strong>}</Alert>
      )}
    </Collapse>
  );
};

export default PopUp;
