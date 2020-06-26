import React from "react";
import classes from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={classes.freeNav}>
            <NavLink to={'/news'}>NewsFriends</NavLink>
            <NavLink to={'/groups'}>NewsGroups</NavLink>
            <NavLink to={'/messages'}>Messages</NavLink>
        </nav>
    );
}

export default Nav;