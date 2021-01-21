import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Paper,
  Avatar,
  Button,
  TextField,
} from "@material-ui/core";
import LockRoundedIcon from "@material-ui/icons/LockRounded";
import Input from "./Input";

const Auth = () => {
  const [ isSignUp, setIsSignUp ] = useState(false);
  const state = null;

  const handleSubmit = () => {};
  const handleChange = () => {};
  const switchSignMode = () => {
    setIsSignUp((prev)=> !prev)
  }

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3}>
        <Avatar>
          <LockRoundedIcon />
        </Avatar>
        <Typography variant="h6">{isSignUp ? "Sign Up" : "Sign In"}</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {isSignUp && (
              <div>
                <Input
                  name="firstName"
                  size="6"
                  type="text"
                  placeholder="First Name"
                  handleChange={handleChange}
                  autoFocus
                />
                <Input
                  name="lastName"
                  size="6"
                  type="text"
                  placeholder="Last Name"
                  handleChange={handleChange}
                />
              </div>
            )}
            <Input
              name="email"
              type="email"
              placeholder="Enter Email"
              handleChange={handleChange}
              autoFocus
            />
            <Input
              name="password"
              type="password"
              placeholder="Enter Passowrd"
              handleChange={handleChange}
            />
            {isSignUp && (
              <Input
                name="confirmPassword"
                type="password"
                placeholder="Confirm Passowrd"
                handleChange={handleChange}
              />
            )}
          </Grid>
          <Button type="Submit" color="primary" variant="contained" fullWidth >{isSignUp ? 'Sign Up' : 'Sign In'}</Button>
        </form>
        {!isSignUp ? (
          <div>
            <p>Don't have an account?</p>
            <Button
              onClick={switchSignMode}
            >
              Create an account here
            </Button>
          </div>
        ) : (
            <div>
            <p>I already have an account.</p>

                <Button
              onClick={switchSignMode}
            >
              Go to Sign In
            </Button>
            </div>
        )}
      </Paper>
    </Container>
  );
};

export default Auth;
