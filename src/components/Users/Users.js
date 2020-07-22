import React from "react";
import classes from "./Users.module.css"

const Users = (props) => {
    return (
        <div className={classes.users}>
            {props.users.map(u => <div key={u.id}>
                    <img src={'http://ooopsmagazine.com/wp-content/uploads/2019/10/imagen66-768x427.jpg'} alt={'photo'} />
                    <div>
                        { u.followed
                            ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={() => {props.follow(u.id)}}>Follow</button>

                        }
                    </div>
                    <div>{u.fullName}</div>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </div>
            )}
        </div>
    );
}

export default Users;