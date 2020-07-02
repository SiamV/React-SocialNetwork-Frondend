import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo";

const Profile = (props) => {
    return (
        <div className={classes.myFeed}>
            <ProfileInfo />
            <MyPosts myPostsData={props.myPostsData}/>
        </div>
    );
}

export default Profile;