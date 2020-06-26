import React from "react";
import classes from './Account.module.css'
import {NavLink} from "react-router-dom";

const Account = () => {
    return (
        <div className={classes.myProfile}>
            <NavLink to={'/profile'}>My Profile</NavLink>
        </div>
    );
}

export default Account;