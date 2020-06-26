import React from "react";
import classes from './Account.module.css'

const Account = () => {
    return (
        <div className={classes.myProfile}>
            <a href={'/profile'}>My Profile</a>
        </div>
    );
}

export default Account;