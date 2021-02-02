import React, {useState, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import Profile from './navbarComponents/Profile';
import { AppBar, Box, Toolbar, Typography, Button } from "@material-ui/core";
import { navbarStyle } from './styles/navbarStyle';

const Navbar = () => {
  const classes = navbarStyle();
  const location = useLocation();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem('user')))
  }, [location])
  
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
        
          {user?.result ? (
            <Profile name={user.result.name} setUser={setUser}/>
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
        
      </Box>
    </AppBar>
  );
};

export default Navbar;
