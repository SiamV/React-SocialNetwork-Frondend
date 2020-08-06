import React from "react";
import classes from './Messages.module.css'
import UsersItem from "./UsersItem/UsersItem";
import MessagesItem from "./MessagesItem/MessagesItem";
import {Redirect} from "react-router-dom";

const Messages = (props) => {
    if(!props.isLogin) {
        return <Redirect to={'/login'} />
    }

    //add textarea y addMessage logic
    let userElements = props.userItemData.map(n => (
        <UsersItem id={n.id} name={n.name} key={n.id}/>
    ))
    let messagesElements = props.messagesData.map(m => (
        <MessagesItem message={m.message} key={m.id}/>
    ))

    //Нажимаем на кнопку
    let addMessage = () => {
        let text = newMessageElement.current.value;
        props.addMessage(text);
    };

    let newMessageElement = React.createRef();

    //FLUX система. Обработчик изменений в textarea
    let onChangeMessage = () => {
        let text = newMessageElement.current.value;
        props.onChangeMessage(text);
    }

    //сама компонента Messages
    return (
        <div className={classes.dialog}>
            <div className={classes.userItems}>
                {userElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div>
                    <textarea value={props.updateMessage} onChange={onChangeMessage}
                              ref={newMessageElement} cols="30" rows="5" placeholder={'new message...'} />
                    <div>
                        <button onClick={addMessage}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Messages;