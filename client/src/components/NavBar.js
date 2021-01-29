import React, {useState, useEffect} from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logOut } from '../actions/auth';
import { AppBar, Box, Avatar, Toolbar, Typography, Button } from "@material-ui/core";
import { navbarStyle } from './styles/navbarStyle';

const Navbar = () => {
  const classes = navbarStyle();
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem('user')))
  }, [location])

  const handleLogOut = () => {
    dispatch(logOut());
    history.push('/');
    setUser(null);
  }
  
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
            <Box display="flex" flexWrap="wrap" justifyContent="center" alignItems="center" className={classes.loginContainer}>
              <Avatar alt={user.result.name} src={user.result.imageUrl}  >
                {user.result.name.charAt(0)}
              </Avatar>
              <Typography color='textPrimary' variant="h6" className={classes.margin}>{user.result.name}</Typography>
              <Button variant="contained" color="secondary" className={classes.margin} onClick={handleLogOut} >
                Log out
              </Button>
            </Box>
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
