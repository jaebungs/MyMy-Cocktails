import React, {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import Profile from './navbarComponents/Profile';
import RecipeSearchInput from './navbarComponents/RecipeSearchInput';
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
      <Box display="flex" flexWrap="wrap" className={classes.navContainer} width="100%" >
        <Box flexGrow={1} className={classes.navItemContainer}>
          <Typography className={classes.navTitle} variant="h1">
            My My Cocktails
          </Typography>

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
        <Box  display="flex" flexWrap="wrap" justifyContent="flex-end" className={classes.loginContainer}>
        {location.pathname === '/library' && <RecipeSearchInput />}
        {location.pathname === '/mybar' && <RecipeSearchInput />}
        {user?.result ? (
          <Profile name={user.result.name} setUser={setUser} />
        ) : (
          <Button component={Link} to="/auth" variant="contained" size='small' className={classes.signButton}>
            Sign In
          </Button>
        )}
        </Box>
      </Box>
    </AppBar>
  );
};

export default Navbar;
