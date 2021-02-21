import React, {useState} from 'react';
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
  TextField
} from '@material-ui/core';
import GoogleLoginComponent from './authComponents/GoogleLoginComponent';
import PopUp from './authComponents/PopUp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GitHubIcon from '@material-ui/icons/GitHub';
import {signUp, signIn, resetMessage} from '../actions/auth';
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
  const [googleLogin, setGoogleLogin] = useState(false);
  const [popUp, setPopUp] = useState(false);

  const message = useSelector((state) => state.auth?.message);

  const handleResetMessage = () => {
    //when login fail due to wrong password etc, get meessage in auth store.
    //this is to reset auth, so each login attempt shows proper PopUp message.
    dispatch(resetMessage());
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      dispatch(signUp(formData, history));
    } else {
      dispatch(signIn(formData, history));
    }
    setPopUp(true);
  };

  const handleFromChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const switchSignMode = () => {
    setIsSignUp((prev) => !prev);
    handleResetMessage();
    setPopUp(false);
    setGoogleLogin(false);
  };

  return (
    <Container component="main" maxWidth="xs" className={classes.authPageContainer}>
      <Paper elevation={3} className={classes.paperContainer}>
        <Box display="flex" alignItems="center" justifyContent="center" mx="auto" pt={4} pb={1}>
          <Avatar className={classes.avatar}>
            <AccountCircleIcon />
          </Avatar>
          <Typography className={classes.title} variant="h2">
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </Typography>
        </Box>

        <div className={classes.collapseContainer}>
          <PopUp
            googleLogin={googleLogin}
            googleError={googleError}
            popUp={popUp}
            setPopUp={setPopUp}
          />
        </div>

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
                <label>
                  <TextField
                    required={true}
                    name="firstName"
                    label="First Name"
                    id="first-name"
                    type="text"
                    className={classes.firstNameInput}
                    onChange={handleFromChange}
                    variant="outlined"
                  />
                </label>

                  <TextField
                    required={true}
                    name="lastName"
                    label="Last Name"
                    id="last-name"
                    type="text"
                    className={classes.lastNameInput}
                    onChange={handleFromChange}
                    variant="outlined"
                  />
              </div>
            )}
            <div>
              <TextField
                required={true}
                name="email"
                label="Email"
                id="email-address"
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
                id="password"
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
                  id="confirm-password"
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
              onClick={handleResetMessage}
              fullWidth
            >
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </Button>
            <GoogleLoginComponent
              isSignUp={isSignUp}
              setGoogleLogin={setGoogleLogin}
              setGoogleError={setGoogleError}
              setPopUp={setPopUp}
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
