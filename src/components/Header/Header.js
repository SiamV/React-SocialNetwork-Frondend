import React from "react";
import  classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.freeHeader}>
            <img src={require('../../drawable/freedom-logo.png')} alt={'logo'} />
            <p>Дорога измеряется не в милях, а в друзьях</p>
        </header>
    );
}
export default Header;