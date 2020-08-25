import React from "react";
import classes from "./Users.module.css"
import fotoDefault from '../../drawable/avatarDefault.png'
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";

let Users = (props) => {
    return (
        <div className={classes.users}>

            <Paginator totalCountUsers={props.totalCountUsers} countUsersPage={props.countUsersPage}
                       onPageChange={props.onPageChange} currentPage={props.currentPage} />

            {props.users.map(u => <div key={u.id}>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small
                        != null ? u.photos.small : fotoDefault}
                             alt={'avatar'} />
                    </NavLink>
                    <div>
                        {u.followed
                            ? <button disabled={props.isButtonDisabling} onClick={() => {
                                //use thunk
                                props.unfollowThunkCreator(u.id)

                            }}>Unfollow</button>
                            : <button disabled={props.isButtonDisabling} onClick={() => {
                                props.followThunkCreator(u.id)
                            }}>Follow</button>

                        }
                    </div>
                    <div>{u.name}</div>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </div>
            )}
        </div>
    );
}

export default Users;
