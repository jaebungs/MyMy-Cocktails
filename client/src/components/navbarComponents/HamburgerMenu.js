import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Box, Collapse , Divider, Typography} from '@material-ui/core';
import {hamburgerMenuStyle} from './hamburgerMenuStyle';

const HamburgerMenu = ({openMenu, setOpenMenu}) => {
  const classes = hamburgerMenuStyle();

  useEffect(()=>{
  }, [openMenu])

  return (
    <Collapse in={openMenu} className={classes.collapseContainer} >
      <Box className={classes.hamburgerMenuContainer} onClick={() => setOpenMenu(false)}>
        <Typography className={classes.navItems} component={Link} variant="h3" to="/" exact="true">
          Shake
        </Typography>
        <Divider variant="middle" />

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
    </Collapse >
  );
};

export default HamburgerMenu;
