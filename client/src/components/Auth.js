import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {Container, Grid, Typography, Paper, Avatar, Button} from '@material-ui/core';
import {GoogleLogin} from 'react-google-login';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import Input from './inputs/Input';
import GoogleIcon from './icons/GoogleIcon';
import {authLogIn, signUp, signIn} from '../actions/auth';

const initialFormData = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const dispatch = useDispatch();
  const history = useHistory();

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
      [e.target.name]: e.target.value
    })
  };

  const switchSignMode = () => {
    setIsSignUp((prev) => !prev);
  };

  const googleSuccess = async (res) => {
    const token = res?.tokenId;
    const result = res?.profileObj;

    try {
      dispatch(authLogIn({token, result})); //dispatch{type: 'AUTH', data: {result, token}} this format may show the flow clear. easier to debug.
      history.push('/');
      console.log('Google login success');
    } catch (err) {
      console.log('login failed',err);
    }
  };

  const googleFailure = (err) => {
    console.log('Google login failure.', err);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3}>
        <Avatar>
          <LockRoundedIcon />
        </Avatar>
        <Typography variant="h6">{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {isSignUp && (
              <div>
                <Input
                  name="firstName"
                  size="6"
                  type="text"
                  placeholder="First Name"
                  handleChange={handleFromChange}
                  autoFocus
                />
                <Input
                  name="lastName"
                  size="6"
                  type="text"
                  placeholder="Last Name"
                  handleChange={handleFromChange}
                />
              </div>
            )}
            <Input
              name="email"
              type="email"
              placeholder="Enter Email"
              handleChange={handleFromChange}
              autoFocus
            />
            <Input
              name="password"
              type="password"
              placeholder="Enter Passowrd"
              handleChange={handleFromChange}
            />
            {isSignUp && (
              <Input
                name="confirmPassword"
                type="password"
                placeholder="Confirm Passowrd"
                handleChange={handleFromChange}
              />
            )}
          </Grid>
          <Button type="Submit" color="primary" variant="contained" fullWidth>
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </Button>
          <GoogleLogin
            clientId="956177338567-9ihhch02mougfmc549q5t4tve3s675p0.apps.googleusercontent.com"
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
            render={(props) => (
              <Button
                onClick={props.onClick}
                disabled={props.disabled}
                color="primary"
                startIcon={<GoogleIcon />}
                varaiant="contained"
                fullWidth
              >
                Google Sign In
              </Button>
            )}
          />
        </form>
        {!isSignUp ? (
          <div>
            <p>Don't have an account?</p>
            <Button onClick={switchSignMode}>Create an account here</Button>
          </div>
        ) : (
          <div>
            <p>I already have an account.</p>

            <Button onClick={switchSignMode}>Go to Sign In</Button>
          </div>
        )}
      </Paper>
    </Container>
  );
};

export default Auth;
