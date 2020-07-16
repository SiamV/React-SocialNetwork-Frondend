import React from "react";
import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import NewPostAddContainer from "./NewPostAdd/NewPostAddContainer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={classes.myFeed}>
            <ProfileInfo />
            <NewPostAddContainer store={props.store}/>
            <MyPostsContainer store={props.store} />
        </div>
    );
}

export default Profile;