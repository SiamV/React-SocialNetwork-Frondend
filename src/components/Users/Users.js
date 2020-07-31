import React from "react";
import classes from "./Users.module.css"
import fotoDefault from '../../drawable/avatarDefault.png'
import {NavLink} from "react-router-dom";

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
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
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
