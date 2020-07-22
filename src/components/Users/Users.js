import React from "react";
import classes from "./Users.module.css"
import * as axios from "axios";

const Users = (props) => {

    if(props.users.length === 0){
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then( response => {
                console.log(response);

            })
    // props.setUsers ([
    //     {id:1, followed: false, fullName: 'Elena Maslova', location: {city: 'Moscow', country: 'Russia'}},
    //     {id:2, followed: false, fullName: 'Denis Krasnov', location: {city: 'Ramenskoe', country: 'Russia'}},
    //     {id:3, followed: true, fullName: 'Evgenia Vasileva', location: {city: 'Kaliningrad', country: 'Russia'}},
    // ])
    }

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