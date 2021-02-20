import React from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import GoogleIcon from '../icons/GoogleIcon';
import {signUp, signIn} from '../../actions/auth';
import {Button} from '@material-ui/core';
import {authStyles} from './authStyles';

const GoogleLoginComponent = ({isSignUp, setGoogleLogin, setGoogleError, setPopUp}) => {
  const dispatch = useDispatch();
  const classes = authStyles();
  const history = useHistory();
  
  const googleResponse = async (res) => {
    const result = res?.profileObj;
    const googleProfile = {
      email: result.email,
      name: result.name,
      password: result.googleId,
      confirmPassword: result.googleId,
      firstName: result.givenName,
      lastName: result.familyName,
    };
    
    try {
      {
        // sign up new user with googleAuth.
        isSignUp && result && dispatch(signUp(googleProfile, history));
      }
      {
        !isSignUp && result && dispatch(signIn(googleProfile, history, true));
      }
        setPopUp(true);
        setGoogleLogin(true);
    } catch (err) {
      setGoogleError('Something is wrong. Please try again.');
      console.log('err', err);
    }
  };

  return (
    <GoogleLogin
      clientId="956177338567-9ihhch02mougfmc549q5t4tve3s675p0.apps.googleusercontent.com"
      onSuccess={googleResponse}
      onFailure={googleResponse}
      cookiePolicy={'single_host_origin'}
      render={(props) => (
        <Button
          onClick={props.onClick}
          color="primary"
          className={classes.googleSignButton}
          disabled={props.disabled}
          startIcon={<GoogleIcon />}
          fullWidth
        >
          Google Sign In
        </Button>
      )}
    />
  );
};

export default GoogleLoginComponent;
