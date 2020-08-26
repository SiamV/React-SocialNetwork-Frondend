import React from "react";
import fotoDefault from '../../drawable/myDefaultAvatar.png'
import {NavLink} from "react-router-dom";

const User = (props) => {
    return (
        <div>
                    <NavLink to={'/profile/' + props.user.id}>
                        <img src={props.user.photos.small
                        != null ? props.user.photos.small : fotoDefault}
                             alt={'avatar'} />
                    </NavLink>
                    <div>
                        {props.user.followed
                            ? <button disabled={props.isButtonDisabling} onClick={() => {
                                //use thunk
                                props.unfollowThunkCreator(props.user.id)

                            }}>Unfollow</button>
                            : <button disabled={props.isButtonDisabling} onClick={() => {
                                props.followThunkCreator(props.user.id)
                            }}>Follow</button>

                        }
                    </div>
                    <div>{props.user.name}</div>
                    <div>{'user.location.country'}</div>
                    <div>{'user.location.city'}</div>
                </div>
    );
}

export default User;
