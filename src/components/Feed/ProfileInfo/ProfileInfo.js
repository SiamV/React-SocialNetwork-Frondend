import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import classes from "./ProfileInfo.module.css"
import ProfileStatusWithHook from "../Status/ProfileStatusWithHook";
import fotoDefault from '../../../drawable/myDefaultAvatar.png';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return (<Preloader />)
    }
    if (props.isLoading === true) {
        return (<Preloader />)
    }
    return (
        <div className={classes.profileInfoBlock}>
            <div><img src={props.profile.photos.large
                ? props.profile.photos.large
                : fotoDefault} alt={'avatar'} /></div>
            <div>Name: {props.profile.fullName}</div>
            <div>About me: {props.profile.aboutMe}</div>
            <div>Contacts: {props.profile.contacts.github}</div>
            <div><ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus} /></div>

        </div>

    )
}
export default ProfileInfo;