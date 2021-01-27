import React from "react";
import { NavLink, Link } from "react-router-dom";
import { AppBar, Box, Avatar, Toolbar, Typography, Button } from "@material-ui/core";
import { navbarStyle } from './styles/navbarStyle';

const Navbar = () => {
  const classes = navbarStyle();
  const user = null;

  return (
    <AppBar className={classes.navbar} position="static" >
      <Box display="flex" flexWrap="wrap" justifyContent="flex-start" alignItems="center" width="100%" >
        <Toolbar className={classes.navLinkContainer}>
          <Typography className={classes.navTitle} edge="start" component={Link} variant="h1" to="/">
            My My Cocktails
          </Typography>
          <Typography className={classes.navItems} component={Link} variant="h3" to="/mybar" exact="true">
            My Bar
          </Typography>
        </Toolbar>
        <div className={classes.loginContainer}>
          {user ? (
            <div>
              <Avatar alt={user.result.name} src={user.result.imageUrl}>
                {user.result.name.charAt(0)}
              </Avatar>
              <Typography variant="h6">{user.result.name}</Typography>
              <Button variant="contained" color="secondary">
                Log out
              </Button>
            </div>
          ) : (
            <Button
              component={Link}
              to="/auth"
              variant="contained"
              color="primary"
            >
              Sign In
            </Button>
          )}
        </div>
      </Box>
    </AppBar>
  );
};

export default Navbar;
