import React from "react";
import  classes from './Feed.module.css'
import MyPosts from "./MyPosts/MyPosts";

const  Feed = () => {
    return (
        <div className={classes.myFeed}>
            <img src={require('../../drawable/aveoAzul.jpg')} alt={'avatar'}/>
            <p>My Account</p>
            <MyPosts />
        </div>
    );
}

export default Feed;