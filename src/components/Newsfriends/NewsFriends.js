import React from "react";
import classes from './Newsfriends.module.css'
import {Redirect} from "react-router-dom";

const NewsFriends = (props) => {
    if(!props.isLogin) {
        return(
            <Redirect to={'/login'} />
        )
    }
    return(
        <div className={classes.newsFriends}>
            <span>News Friends</span>
        </div>
    )
}

export default NewsFriends;