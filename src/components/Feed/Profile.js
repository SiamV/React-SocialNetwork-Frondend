import React from "react";
import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import NewPostAdd from "./NewPostAdd/NewPostAdd";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return (
        <div className={classes.myFeed}>
            <ProfileInfo />
            <NewPostAdd
                addPost={props.addPost}
                newPostAdd={props.newPostAdd}
                updateNewPost={props.updateNewPost}
            />
            <MyPosts myPostsData={props.myPostsData}/>
        </div>
    );
}

export default Profile;