import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <h1>My My Cocktails</h1>
            <NavLink
                exact
                to="/"
                activeClassName="is-active"
            >
                Home
            </NavLink>
            <NavLink
                exact
                to="/mybar"
                activeClassName="is-active"
            >
                My Bar
            </NavLink>
        </div>
    )
}

export default Navbar;