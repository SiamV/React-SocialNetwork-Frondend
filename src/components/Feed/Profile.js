import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo";

const Profile = () => {
    return (
        <div className={classes.myFeed}>
            <ProfileInfo />
            <MyPosts />
        </div>
    );
}

export default Profile;