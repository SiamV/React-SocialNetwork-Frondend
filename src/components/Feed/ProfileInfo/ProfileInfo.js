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

    const onMainPhotoSelected = (e) => {
        if(e.target.files.length)
        {props.savePhoto(e.target.files[0])}
    }

    return (
        <div className={classes.profileInfoBlock}>
            <div><img src={props.profile.photos.large
                ? props.profile.photos.large
                : fotoDefault} alt={'avatar'} /></div>
            <div>Change avatar: {!props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}</div>
            <div>Name: {props.profile.fullName}</div>
            <div>About me: {props.profile.aboutMe}</div>
            <div>Contacts: {props.profile.contacts.github}</div>
            <div><ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus} /></div>
        </div>

    )
}
export default ProfileInfo;