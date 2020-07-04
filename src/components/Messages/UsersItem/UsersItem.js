import classes from "./UserItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const UsersItem = (props) => {
    return (
        <div className={classes.user}>
            <NavLink to={"/messages/" + props.id} className={classes.link}>{props.name}</NavLink>
        </div>
    )
}

export default UsersItem;