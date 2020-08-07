import React from "react";
import classes from './Newsfriends.module.css'
import {withLoginRedirect} from "../HOC/withLoginRedirect";

const NewsFriends = (props) => {
    return(
        <div className={classes.newsFriends}>
            <span>News Friends</span>
        </div>
    )
}

export default withLoginRedirect(NewsFriends);

