import React from "react";
import classes from "./Users.module.css"
import fotoDefault from '../../drawable/avatarDefault.png'
import {NavLink} from "react-router-dom";
import {followUser, unfollowUser} from "../../api/api";

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
                            ? <button disabled={props.isButtonDisabling} onClick={() => {
                                props.setButtonDisabling(true);
                                unfollowUser(u.id)
                                    .then(data => {
                                        if(data.resultCode === 0) {
                                            props.unfollow(u.id)
                                            props.setButtonDisabling(false);
                                        }
                                    })
                            }}>Unfollow</button>
                            : <button disabled={props.isButtonDisabling} onClick={() => {
                                props.setButtonDisabling(true);
                                followUser(u.id)
                                    .then(data => {
                                        if (data.resultCode === 0) {
                                            props.follow(u.id);
                                            props.setButtonDisabling(false);
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
