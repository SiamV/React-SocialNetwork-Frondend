import React from "react";
import classes from './Nav.module.css'

const Nav = () => {
    return (
        <nav className={classes.freeNav}>
            <a href={'/news'}>NewsFriends</a>
            <a href={'/groups'}>NewsGroups</a>
            <a href={'/messages'}>Messages</a>
        </nav>
    );
}

export default Nav;