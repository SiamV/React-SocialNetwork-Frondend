import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "../Status/ProfileStatus";
import classes from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
    if (!props.profile) {
        return (<Preloader />)
    }
    if(props.isLoading===true){
        return (<Preloader />)
    }
    return (
        <div className={classes.profileInfoBlock}>
            <div><img src={props.profile.photos.large ?props.profile.photos.large :require('../../../drawable/myDefaultAvatar.png')} alt={'avatar'} /></div>
            <div>Name: {props.profile.fullName}</div>
            <div>About me: {props.profile.aboutMe}</div>
            <div>Contacts: {props.profile.contacts.github}</div>
            <div><ProfileStatus status={'A journey is best measured in friends, not in miles.'}/></div>

        </div>

    )
}
export default ProfileInfo;