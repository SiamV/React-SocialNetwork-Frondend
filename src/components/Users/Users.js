import React from "react";
import classes from "./Users.module.css"
import fotoDefault from '../../drawable/avatarDefault.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {
    let countPage = Math.ceil(props.totalCountUsers / props.countUsersPage);
    let pages = [];
    for (let i = 1; i <= countPage; i++) {
        pages.push(i);
    }
    ;
    return (
        <div className={classes.users}>
            <div> {pages.map(p => {
                return <span key={p.id} onClick={(e) => {
                    props.onPageChange(p)
                }}
                             className={props.currentPage === p ? classes.current : classes.othersNumbers}>{p}</span>
            })}
            </div>
            {props.users.map(u => <div key={u.id}>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small
                        != null ? u.photos.small : fotoDefault}
                             alt={'avatar'} />
                    </NavLink>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                    {
                                        withCredentials: true,
                                        headers: {"API-KEY": "f5c4bbba-674e-4a1d-8c4e-f97b4c67964e"}
                                    })
                                    .then(response => {
                                        if(response.data.resulCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    })
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                    {
                                        withCredentials: true,
                                        headers: {"API-KEY": "f5c4bbba-674e-4a1d-8c4e-f97b4c67964e"}
                                    })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id);
                                        }
                                    })

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
