import React from "react";
import classes from './Messages.module.css'
import UsersItem from "./UsersItem/UsersItem";
import MessagesItem from "./MessagesItem/MessagesItem";

const Messages = (props) => {

    //Данные из БД
    // let userItemData = [
    //     {id: 1, name: "Andrew"},
    //     {id: 2, name: "Sveta"},
    //     {id: 3, name: "Egor"},
    //     {id: 4, name: "Natasha"},
    //     {id: 5, name: "Nikolay"}
    // ]
    //
    // let messagesData = [
    //     {id: 1, message: "Hi. My name is Andrey"},
    //     {id: 2, message: "Hi, Andrey. How are you?"},
    //     {id: 3, message: "That fine. I work in Moscow"},
    //     {id: 4, message: "Ok. What is your profession?"}
    // ]

    //преобразование массива из БД в массив из наших компонент, которые возвращают JSX с props. Мы их вынесли в
    // отдельную компоненту, которую выводим в этой компоненте
    let userElements = props.userItemData.map(n => (
        <UsersItem id={n.id} name={n.name} />
    ))
    let messagesElements = props.messagesData.map(m => (
        <MessagesItem message={m.message} />
    ))

    //Нажимаем на кнопку
    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text)
    };

    let newMessageElement = React.createRef();

    //сама компонента Messages
    return (
        <div className={classes.dialog}>
            <div className={classes.userItems}>
                {userElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div>
                    <textarea ref={newMessageElement} cols="30" rows="5" placeholder={'new message...'}></textarea>
                    <div>
                        <button onClick={addMessage}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Messages;