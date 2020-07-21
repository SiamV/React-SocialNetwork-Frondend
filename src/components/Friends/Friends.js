import React from "react";
import classes from './Friends.module.css'
import {NavLink} from "react-router-dom";

const  Friends = (props) => {


    let friendsElements = props.myFriendsData.map(f => (
        <NavLink to={f.link} className={classes.NavLink} key={f.id}>{f.name}</NavLink>
    ))

    return (
        <div className={classes.myFriends}>
            <div>
            <span>To find new friends:</span>
            <button><NavLink to={'/users'}>go!</NavLink></button>
            </div>
            <div>
            <span>My friends:</span>
            <ul>
                {friendsElements}
            </ul>
            </div>
        </div>
    );
}

export default Friends;