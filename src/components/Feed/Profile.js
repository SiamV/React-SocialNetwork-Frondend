import React from "react";
import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import NewPostAdd from "./NewPostAdd/NewPostAdd";
import MyPosts from "./MyPosts/MyPosts";
import {addMyPost} from "../../redux/state";

const Profile = (props) => {
    return (
        <div className={classes.myFeed}>
            <ProfileInfo />
            <NewPostAdd addPost={props.addPost}/>
            <MyPosts myPostsData={props.myPostsData}/>
        </div>
    );
}

export default Profile;