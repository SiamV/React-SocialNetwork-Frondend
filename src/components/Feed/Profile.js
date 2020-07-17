import React from "react";
import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import NewPostAddContainer from "./NewPostAdd/NewPostAddContainer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {
    return (
        <div className={classes.myFeed}>
            <ProfileInfo />
            <NewPostAddContainer />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;