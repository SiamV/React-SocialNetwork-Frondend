import React from "react";
import classes from './Friends.module.css'
import {NavLink} from "react-router-dom";

const  Friends = () => {
    return (
        <div className={classes.myFriends}>
            <span>Friends:</span>
            <ul>
                <NavLink to={'/fedor'} className={classes.NavLink}>Fedor</NavLink>
                <NavLink to={'/nastya'} className={classes.NavLink}>Nastya</NavLink>
                <NavLink to={'/nikolay'} className={classes.NavLink}>Nikolay</NavLink>
                <NavLink to={'/max'} className={classes.NavLink}>Max</NavLink>
                <NavLink to={'/viktor'} className={classes.NavLink}>Viktor</NavLink>
                <NavLink to={'/anna'} className={classes.NavLink}>Anna</NavLink>
            </ul>
        </div>
    );
}

export default Friends;