import React, {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import Profile from './navbarComponents/Profile';
import HamburgerMenu from './navbarComponents/HamburgerMenu';
import RecipeSearchInput from './navbarComponents/RecipeSearchInput';
import {AppBar, Box, Toolbar, IconButton, Link, Typography, Button} from '@material-ui/core';
import {navbarStyle} from './navbarComponents/navbarStyle';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

const NavBar = () => {
  const classes = navbarStyle();
  const location = useLocation();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, [location]);

  const handleMenuIconClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <section>
      <AppBar className={classes.navbar} position="static">
        <Toolbar>
        <Box display="flex" flexWrap="wrap" className={classes.navContainer} width="100%">
          {!openMenu ? (
            <IconButton className={classes.menuIcon} onClick={handleMenuIconClick}>
              <MenuIcon />
            </IconButton>
          ) : (
            <IconButton className={classes.menuIcon} onClick={handleMenuIconClick}>
              <MenuOpenIcon />
            </IconButton>
          )}

          <HamburgerMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />

          <Box flexGrow={1} className={classes.navItemContainer}>
            <Typography className={classes.navTitle} variant="h1">
              My My Cocktails
            </Typography>
            <Link
              className={classes.navItems}
              variant="h3"
              href="/"
              exact="true"
            >
              Shake
            </Link>
            <Link
              className={classes.navItems}
              variant="h3"
              href="/library"
              exact="true"
            >
              Library
            </Link>
            <Link
              className={classes.navItems}
              variant="h3"
              href="/mybar"
              exact="true"
            >
              My Bar
            </Link>
          </Box>
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="flex-end"
            className={classes.loginContainer}
          >
            {location.pathname === '/library' && <RecipeSearchInput />}
            {location.pathname === '/mybar' && <RecipeSearchInput />}
            {user?.result ? (
              <Profile name={user.result.name} setUser={setUser} />
            ) : (
              <Button
                component={Link}
                href="/auth"
                variant="contained"
                size="small"
                className={classes.signButton}
              >
                Sign In
              </Button>
            )}
          </Box>
        </Box>
        </Toolbar>
      </AppBar>
    </section>
  );
};

export default NavBar;
