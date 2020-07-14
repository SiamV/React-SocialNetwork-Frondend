import React from "react";
import classes from './NewsGroupsPosts.module.css';


const NewsGroupsPosts = (props) => {

    return (
        <div className={classes.NewsGroupsPosts}>
            <div>{props.message}</div>
        </div>
    )
}
export default NewsGroupsPosts;