import React from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css"

const MyPosts = () => {
    return (
        <div className={classes.MyPosts}>
            <h3>New Post:</h3>
            <textarea>Text</textarea>
            <button>Add</button>
            <button>Delete</button>
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default MyPosts;