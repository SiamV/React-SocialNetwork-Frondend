import React from "react";
import classes from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={classes.post}>
            <img src={require('../../../../drawable/myDefaultAvatar.png')} alt={'avatar'}/>
           <span>{props.description}</span>
            <div className={classes.likeField}>
            <span>like: {props.like}</span>
            </div>
        </div>
    )
}

export default Post;