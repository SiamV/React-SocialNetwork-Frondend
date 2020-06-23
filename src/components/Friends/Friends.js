import React from "react";
import classes from './Friends.module.css'

const  Friends = () => {
    return (
        <div className={classes.myFriends}>
            <ul>
                <li>Fedor</li>
                <li>Nastya</li>
                <li>Nikilay</li>
                <li>Max</li>
                <li>Victor</li>
                <li>Anna</li>
            </ul>
        </div>
    );
}

export default Friends;