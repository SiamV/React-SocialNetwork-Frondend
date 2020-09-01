import React from "react";
import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import NewPostAddContainer from "./NewPostAdd/NewPostAddContainer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={classes.myFeed}>
            <ProfileInfo profile={props.profile} isLoading={props.isLoading}
                         status={props.status} updateStatus={props.updateStatus}
                         isOwner={props.isOwner}
                         savePhoto={props.savePhoto}
            />
            <NewPostAddContainer />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;