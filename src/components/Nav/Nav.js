import React from "react";
import classes from './Nav.module.css'

const Nav = () => {
    return (
        <nav className={classes.freeNav}>
            <a>NewsFriends</a>
            <a>NewsGroups</a>
            <a>Messages</a>
        </nav>
    );
}

export default Nav;