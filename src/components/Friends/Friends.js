import React from "react";
import classes from './Friends.module.css'
import {NavLink} from "react-router-dom";

const  Friends = () => {
    let myFriendsData = [
        {id: 1, name: "Fedor", link: "/fedor"},
        {id: 2, name: "Nastya", link: "/nastya"},
        {id: 3, name: "Nikolay", link: "/nikolay"},
        {id: 4, name: "Max", link: "/max"},
        {id: 5, name: "Viktor", link: "/viktor"},
        {id: 6, name: "Anna", link: "/anna"}
    ]

    let friendsElements = myFriendsData.map(f => (
        <NavLink to={f.link} className={classes.NavLink}>{f.name}</NavLink>
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