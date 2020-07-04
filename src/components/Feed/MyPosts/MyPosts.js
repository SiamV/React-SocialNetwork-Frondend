import React from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css"

const MyPosts = (props) => {

    let postsElements = props.myPostsData.map(p => (
        <Post description={p.post} like={p.like} />
    ))

    return (
        <div className={classes.MyPosts}>
                {postsElements}
        </div>
    )
}

export default MyPosts;