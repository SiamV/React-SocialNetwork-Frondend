import React from "react";
import classes from "./Messages.module.css";
import UsersItem from "./UsersItem/UsersItem";
import ReduxFormMessages from "./ReduxFormMessages";
import MessagesItem from "./MessagesItem/MessagesItem";


const MessagesWithReduxForm = (props) => {
    let userElements = props.userItemData.map(n => (
        <UsersItem id={n.id} name={n.name} key={n.id} />
    ))

    let messagesElements = props.messagesData.map(m => (
        <MessagesItem message={m.message} key={m.id} />
    ))

    //get data from ReduxFormMessages
    const onSubmit = (formData) => {
        props.addMessage(formData.textarea);
        console.log(formData)
    }

    return (
        <div className={classes.dialog}>
            <div className={classes.userItems}>
                {userElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div className={classes.messages}>
                    <ReduxFormMessages onSubmit={onSubmit} />
                </div>
            </div>
        </div>
    )
}

export default MessagesWithReduxForm;