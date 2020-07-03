import React from "react";
import classes from "./MessagesItem.module.css"

const MessagesItem = (props) => {
    return (
        <div>
            <div className={classes.message}>{props.message}</div>
        </div>
    )
}

export default MessagesItem;