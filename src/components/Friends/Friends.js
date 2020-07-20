import React from "react";
import classes from './Friends.module.css'
import {NavLink} from "react-router-dom";

const  Friends = (props) => {


    let friendsElements = props.myFriendsData.map(f => (
        <NavLink to={f.link} className={classes.NavLink} key={f.id}>{f.name}</NavLink>
    ))

    return (
        <div className={classes.myFriends}>
            <span>Friends:</span>
            <ul>
                {friendsElements}
            </ul>
        </div>
    );
}

export default Friends;