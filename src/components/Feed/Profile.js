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
                newPostAdd={props.newPostAdd}
                dispatch={props.dispatch}
            />
            <MyPosts myPostsData={props.myPostsData}/>
        </div>
    );
}

export default Profile;