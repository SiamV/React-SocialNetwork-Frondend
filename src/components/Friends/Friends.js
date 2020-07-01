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

    return (
        <div className={classes.myFriends}>
            <span>Friends:</span>
            <ul>
                <NavLink to={myFriendsData[0].link} className={classes.NavLink}>{myFriendsData[0].name}</NavLink>
                <NavLink to={myFriendsData[1].link} className={classes.NavLink}>{myFriendsData[1].name}</NavLink>
                <NavLink to={myFriendsData[2].link} className={classes.NavLink}>{myFriendsData[2].name}</NavLink>
                <NavLink to={myFriendsData[3].link} className={classes.NavLink}>{myFriendsData[3].name}</NavLink>
                <NavLink to={myFriendsData[4].link} className={classes.NavLink}>{myFriendsData[4].name}</NavLink>
                <NavLink to={myFriendsData[5].link} className={classes.NavLink}>{myFriendsData[5].name}</NavLink>
            </ul>
        </div>
    );
}

export default Friends;