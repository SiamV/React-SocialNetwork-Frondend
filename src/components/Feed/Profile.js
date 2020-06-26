import React from "react";
import  classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const  Profile = () => {
    return (
        <div className={classes.myFeed}>
            <img src={require('../../drawable/aveoAzul.jpg')} alt={'avatar'}/>
            <p>My Account</p>
            <MyPosts />
        </div>
    );
}

export default Profile;