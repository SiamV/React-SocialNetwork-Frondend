import React from "react";
import classes from './Messages.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={classes.user}>
            <NavLink to={"/messages/" + props.id} className={classes.link}>{props.name}</NavLink>
        </div>
    )
}

const MessageItem = (props) => {
    return (
        <div>
            <div className={classes.message}>{props.message}</div>
        </div>
    )
}

const Messages = () => {
    return (
        <div className={classes.dialog}>
            <div className={classes.userItems}>
                <DialogItem id={"1"} name={"Andrew"} />
                <DialogItem id={"2"} name={"Sveta"} />
                <DialogItem id={"3"} name={"Egor"} />
                <DialogItem id={"4"} name={"Natasha"} />
                <DialogItem id={"5"} name={"Nikolay"} />
            </div>
            <div className={classes.messages}>
                <MessageItem message={"Hi. My name is Andrey"} />
                <MessageItem message={"Hi, Andrey. How are you?"} />
                <MessageItem message={"That fine. I work in Moscow"} />
                <MessageItem message={"Ok. What is your profession?"} />
            </div>
        </div>
    );
}

export default Messages;