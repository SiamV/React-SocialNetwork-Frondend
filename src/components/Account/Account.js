import React from "react";
import classes from './Account.module.css'
import {NavLink} from "react-router-dom";

const Account = (props) => {
    return (
        <div className={classes.myProfile}>
            {props.isLogin
                ? <div className={classes.profileBlock}><NavLink to={'/profile'}>{props.login} / My Profile</NavLink>
                    <button onClick={props.logoutSiteThunkCreator}>Log Out</button>
                </div>
                : <div className={classes.loginBlock}><NavLink to={'/login'}>Login</NavLink></div>
            }

        </div>
    );
}

export default Account;