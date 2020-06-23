import React from "react";
import classes from './Nav.module.css'

const Nav = () => {
    return (
        <nav className={classes.freeNav}>
            <a>Home</a>
            <a>Groups</a>
            <a>Country</a>
        </nav>
    );
}

export default Nav;