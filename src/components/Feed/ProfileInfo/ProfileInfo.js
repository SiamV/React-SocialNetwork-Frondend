import React, {useState} from "react";
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
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [editMode, setEditMode] = useState(false);

    return (
        <div className={classes.profileInfoBlock}>
            <div><img src={props.profile.photos.large
                ? props.profile.photos.large
                : fotoDefault} alt={'avatar'} /></div>
            <div>{!props.isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}</div>
            <div><b>My status</b>: <ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus} />
            </div>
            <div>{editMode ? <ProfileDataForm />
                : <ProfileData profile={props.profile}
                               isOwner={props.isOwner}
                               goToEditMode={() => {
                                   setEditMode(true)
                               }} />}</div>
        </div>

    )
}
export default ProfileInfo;

const ProfileData = (props) => {
    return (
        <div>
            <div><b>Name</b>: {props.profile.fullName}</div>
            <div><b>About me</b>: {props.profile.aboutMe}</div>
            <div><b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
                return <Contacts contactTitle={key}
                                 contactValue={props.profile.contacts[key]}
                />
            })}</div>
            <div>{!props.isOwner &&
            <button onClick={props.goToEditMode}>edit profile</button>
            }</div>
        </div>
    )
}
const Contacts = (props) => {
    return (
        <div>
            {props.contactTitle}: {props.contactValue}
        </div>
    )
}

const ProfileDataForm = (props) => {
    return (
        <div>
            Form
        </div>
    )
}
