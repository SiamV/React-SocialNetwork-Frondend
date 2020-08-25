import React from "react";
import classes from "./Users.module.css"
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = (props) => {
    return (
        <div className={classes.users}>

            <Paginator totalCountUsers={props.totalCountUsers} countUsersPage={props.countUsersPage}
                       onPageChange={props.onPageChange} currentPage={props.currentPage} />

            {props.users.map(u => <User user={u}
                                        key={u.id}
                                        isButtonDisabling={props.isButtonDisabling}
                                        unfollowThunkCreator={props.unfollowThunkCreator}
                                        followThunkCreator={props.followThunkCreator} />
            )}
        </div>
    );
}

export default Users;
