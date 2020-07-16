import React from "react";
import {addMyMessageActionCreator, updateNewMessageActionCreator} from "../../redux/messagesPageReducer";
import Messages from "./Messages";

const MessagesContainer = (props) => {

    //Нажимаем на кнопку
    let addMessage = (text) => {
        props.store.dispatch(addMyMessageActionCreator(text));
    };

    //FLUX система. Обработчик изменений в textarea
    let onChangeMessage = (text) => {
        props.store.dispatch(updateNewMessageActionCreator(text));
    }

    //сама компонента Messages
    return (
        <div>
            <Messages addMessage={addMessage}
                      onChangeMessage={onChangeMessage}
                      userItemData={props.store.getState().messagesPage.userItemData}
                      messagesData={props.store.getState().messagesPage.messagesData}
                      updateMessage={props.store.getState().messagesPage.updateMessage}
            />
        </div>
    );
}

export default MessagesContainer;