import classes from "../Messages.module.css";
import React from "react";

const MessagesItem = (props) => {
    return (
        <div>
            <div className={classes.message}>{props.message}</div>
        </div>
    )
}

export default MessagesItem;