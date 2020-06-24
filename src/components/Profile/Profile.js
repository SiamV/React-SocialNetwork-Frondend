import React from "react";
import classes from './Profile.module.css'

const Profile = () => {
    return (
        <div className={classes.myProfile}>
            <a href={'https://mexicoline.ru'}>My Profile</a>
        </div>
    );
}

export default Profile;