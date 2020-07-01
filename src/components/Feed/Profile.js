import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const ProfileInfo = () => {
    return (
        <div>
            <img src={require('../../drawable/aveoAzul.jpg')} alt={'avatar'} />
            <p>My status: A journey is best measured in friends, not in miles.</p>
        </div>
    )
}

const Profile = () => {
    return (
        <div className={classes.myFeed}>
            <ProfileInfo />
            <MyPosts />
        </div>
    );
}

export default Profile;