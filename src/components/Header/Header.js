import React from "react";
import  classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.freeHeader}>
            <img src={require('../../drawable/freedom-logo.png')} alt={'logo'} />
            <p>A journey is best measured in friends, <br/>not in miles.</p>
        </header>
    );
}
export default Header;