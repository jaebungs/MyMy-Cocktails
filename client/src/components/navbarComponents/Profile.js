import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux';
import { logOut } from '../../actions/auth';
import {
  Box,
  Avatar,
  Collapse,
  Paper,
  IconButton,
  Popper,
  ClickAwayListener,
  Divider,
  MenuList,
  MenuItem,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {profileStyles} from './profileStyles';

// After login, account avatar with collapse menu.
const Profile = ({name, setUser}) => {
  const classes = profileStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [expanded, setExpanded] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleExpandClick = (e) => {
    setExpanded(!expanded);
    setAnchorEl(e.currentTarget);
  };

  const handleExpandClose = () => {
    setExpanded(false);
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    dispatch(logOut());
    history.push('/');
    setUser(null);
  }

  return (
    <Box>
      <IconButton
        className={classes.profileButton}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more account"
        disableRipple
        disablefocusripple="true"
      >
        <Avatar alt={name} className={classes.avatar}>
          {name.charAt(0)}
        </Avatar>
        <ExpandMoreIcon />
      </IconButton>

      <Popper open={expanded} anchorEl={anchorEl} placement='bottom-end'>
        <ClickAwayListener onClickAway={handleExpandClose}>
          <Paper className={classes.accountPaper}>
            <Typography className={classes.accountName}>Hello! {name}</Typography>
            <Divider />
            <MenuList>
              <MenuItem onClick={handleLogOut} className={classes.menuItem}>Log Out</MenuItem>
            </MenuList>
          </Paper>
        </ClickAwayListener>
      </Popper>
    </Box>
  );
};

export default Profile;
