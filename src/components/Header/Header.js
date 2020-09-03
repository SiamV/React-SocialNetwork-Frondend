import React from "react";
import  classes from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={classes.freeHeader}>
            <NavLink to={'/'}> <img src={require('../../drawable/freedom-logo.png')} alt={'logo'} /> </NavLink>
            <p>A journey is best measured in friends, <br/>not in miles.</p>
        </header>
    );
}
export default Header;