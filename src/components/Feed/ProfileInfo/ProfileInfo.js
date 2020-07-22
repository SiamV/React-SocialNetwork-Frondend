import React from "react";

const ProfileInfo = () => {
    return (
        <div>
            <img src={require('../../../drawable/myDefaultAvatar.png')} alt={'avatar'} />
            <p>My status: A journey is best measured in friends, not in miles.</p>
        </div>
    )
}
export default ProfileInfo;