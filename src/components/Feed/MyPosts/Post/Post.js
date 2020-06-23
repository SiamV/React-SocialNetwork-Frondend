import React from "react";
import classes from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={classes.post}>
            <img src={require('../../../../drawable/aveoAzul.jpg')} alt={'avatar'}/>
           <span>{props.description}</span>
            <div>
            <span>like: {props.like}</span>
            </div>
        </div>
    )
}

export default Post;