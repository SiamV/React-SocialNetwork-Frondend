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

    let userItemData = [
        {id: 1, name: "Andrew"},
        {id: 2, name: "Sveta"},
        {id: 3, name: "Egor"},
        {id: 4, name: "Natasha"},
        {id: 5, name: "Nikolay"}
    ]

    let messagesData =[
        {id: 1, message: "Hi. My name is Andrey"},
        {id: 2, message: "Hi, Andrey. How are you?"},
        {id: 3, message: "That fine. I work in Moscow"},
        {id: 4, message: "Ok. What is your profession?"}
    ]
    return (
        <div className={classes.dialog}>
            <div className={classes.userItems}>
                <DialogItem id={userItemData[0].id} name={userItemData[0].name} />
                <DialogItem id={userItemData[1].id} name={userItemData[1].name} />
                <DialogItem id={userItemData[2].id} name={userItemData[2].name} />
                <DialogItem id={userItemData[3].id} name={userItemData[3].name} />
                <DialogItem id={userItemData[4].id} name={userItemData[4].name} />
            </div>
            <div className={classes.messages}>
                <MessageItem message={messagesData[0].message} />
                <MessageItem message={messagesData[1].message} />
                <MessageItem message={messagesData[2].message} />
                <MessageItem message={messagesData[3].message} />
            </div>
        </div>
    );
}

export default Messages;