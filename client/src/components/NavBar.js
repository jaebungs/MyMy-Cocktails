import React, {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import Profile from './navbarComponents/Profile';
import {AppBar, Box, Toolbar, Typography, Button} from '@material-ui/core';
import {navbarStyle} from './navbarComponents/navbarStyle';

const Navbar = () => {
  const classes = navbarStyle();
  const location = useLocation();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, [location]);

  return (
    <AppBar className={classes.navbar} position="static">
      <Box display="flex" flexWrap="wrap" width="100%" alignItems="center">
        <Box flexGrow={1}>
          <Typography className={classes.navTitle} variant="h1">
            My My Cocktails
          </Typography>
        </Box>

        {user?.result ? (
          <Profile name={user.result.name} setUser={setUser} />
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary">
            Sign In
          </Button>
        )}
      </Box>

      <Box
        display="flex"
        flexWrap="wrap"
        className={classes.navLinkContainer}
        width="100%"
        alignItems="center"
      >
        <Typography
          className={classes.navItems}
          component={Link}
          variant="h3"
          to="/"
          exact="true"
        >
          Shake
        </Typography>
        <Typography
          className={classes.navItems}
          component={Link}
          variant="h3"
          to="/library"
          exact="true"
        >
          Library
        </Typography>
        <Typography
          className={classes.navItems}
          component={Link}
          variant="h3"
          to="/mybar"
          exact="true"
        >
          My Bar
        </Typography>
      </Box>
    </AppBar>
  );
};

export default Navbar;
