import React from "react";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile){
        return(<Preloader/>)
    }
    return (
        <div>
            <img src={require('../../../drawable/myDefaultAvatar.png')} alt={'avatar'} />
            <p>My status: A journey is best measured in friends, not in miles.</p>
            <div> <img src={props.profile.photos.large}/> </div>
            <div>Name: {props.profile.fullName}</div>
            <div>About me: {props.profile.aboutMe}</div>
            <div>Contacts: {props.profile.contacts.github}</div>
        </div>

    )
}
export default ProfileInfo;