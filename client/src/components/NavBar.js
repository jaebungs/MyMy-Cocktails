import React from "react";
import { NavLink, Link } from "react-router-dom";
import { AppBar, Avatar, Toolbar, Typography, Button } from "@material-ui/core";

const Navbar = () => {
  const user = null;

  return (
    <AppBar position="static">
      <Typography component={Link} variant="h1" to="/">
        My My Cocktails
      </Typography>
      <Link exact="true" to="/mybar">
        My Bar
      </Link>
      <Toolbar>
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
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
