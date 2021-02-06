import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {
  Container,
  Grid,
  Typography,
  Paper,
  Avatar,
  Button,
  IconButton,
  Box,
  TextField,
  Collapse,
} from '@material-ui/core';
import {Alert, AlertTitle} from '@material-ui/lab';
import {GoogleLogin, GoogleLogout } from 'react-google-login';
import GoogleIcon from './icons/GoogleIcon';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GitHubIcon from '@material-ui/icons/GitHub';
import {signUp, signIn} from '../actions/auth';
import {authStyles} from './authComponents/authStyles';

const initialFormData = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Auth = () => {
  const classes = authStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [googleError, setGoogleError] = useState(false);

  const message = useSelector((state) => state.auth?.message);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      dispatch(signUp(formData, history));
    } else {
      dispatch(signIn(formData, history));
    }
  };

  const handleFromChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const switchSignMode = () => {
    setIsSignUp((prev) => !prev);
  };

  const googleResponse = (res) => {
    const result = res?.profileObj;
    const googleProfile = {
        email: result.email,
        name: result.name,
        password: result.googleId,
        confirmPassword: result.googleId,
        firstName: result.givenName,
        lastName: result.familyName,
      }
    
    try {
      
      isSignUp & googleProfile
        ? dispatch(signUp(googleProfile, history))
        : dispatch(signIn(googleProfile, history));
      console.log('Google login success');
      setGoogleError(false);
    } catch (err) {
      setGoogleError('Something is wrong. Please check again.');
      console.log('err', err)
    }
  };

  return (
    <Container component="main" maxWidth="xs" className={classes.authPageContainer}>
      <Paper elevation={3} className={classes.paperContainer}>
        <Box display="flex" alignItems="center" justifyContent="center" mx="auto" p={4}>
          <Avatar className={classes.avatar}>
            <AccountCircleIcon />
          </Avatar>
          <Typography className={classes.title} variant="h6">
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </Typography>
        </Box>
        <Collapse in={!!message || !!googleError}>
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {message && <strong>{message}</strong>}
            {googleError && <strong>{googleError}</strong>}
          </Alert>
        </Collapse>
        <form onSubmit={handleSubmit}>
          <Grid
            container
            direction="column"
            spacing={1}
            alignItems="center"
            className={classes.inputContainer}
            
          >
            {isSignUp && (
              <div className={classes.nameContainer}>
                <Grid item sm={6} xs={12}>
                  <TextField
                    required={true}
                    name="firstName"
                    label="First Name"
                    type="text"
                    className={classes.firstNameInput}
                    onChange={handleFromChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <TextField
                    required={true}
                    name="lastName"
                    label="Last Name"
                    type="text"
                    className={classes.lastNameInput}
                    onChange={handleFromChange}
                    variant="outlined"
                  />
                </Grid>
              </div>
            )}
            <div>
              <TextField
                required={true}
                name="email"
                label="Email"
                type="email"
                autoComplete="username"
                className={classes.input}
                onChange={handleFromChange}
                variant="outlined"
              />

              <TextField
                required={true}
                name="password"
                label="password"
                type="password"
                autoComplete="current-password"
                className={classes.input}
                onChange={handleFromChange}
                variant="outlined"
              />

              {isSignUp && (
                <TextField
                  required={true}
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  className={classes.input}
                  onChange={handleFromChange}
                  variant="outlined"
                />
              )}
            </div>
          </Grid>
          <Grid
            container
            direction="column"
            spacing={1}
            alignItems="center"
            className={classes.inputContainer}
          >
            <Button
              type="Submit"
              color="primary"
              variant="contained"
              className={classes.signButton}
              fullWidth
            >
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </Button>
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
                  {isSignUp ? 'Google Sign Up' : 'Google Sign In'}
                </Button>
              )}
            />
          </Grid>
        </form>

        {!isSignUp ? (
          <div>
            <p>Don't have an account?</p>
            <Button className={classes.switchButton} onClick={switchSignMode}>
              Create account
            </Button>
          </div>
        ) : (
          <div>
            <p>I already have an account.</p>

            <Button className={classes.switchButton} onClick={switchSignMode}>
              Go Sign in
            </Button>
          </div>
        )}
      </Paper>
      <Box display="flex" m="auto" mt={2} justifyContent="center">
        <IconButton
          aria-label="go to github page"
          href="https://github.com/jaebungs/MyMy-Cocktails"
        >
          <GitHubIcon />
        </IconButton>
      </Box>
    </Container>
  );
};

export default Auth;
