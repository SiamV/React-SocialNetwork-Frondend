import React from "react";
import {addMyMessageActionCreator, updateNewMessageActionCreator} from "../../redux/messagesPageReducer";
import Messages from "./Messages";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        userItemData: state.messagesPage.userItemData,
        messagesData: state.messagesPage.messagesData,
        updateMessage: state.messagesPage.updateMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (text) => {
            dispatch(addMyMessageActionCreator(text));
        },
        onChangeMessage: (text) => {
           dispatch(updateNewMessageActionCreator(text));
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps) (Messages);

export default MessagesContainer;



// const MessagesContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 //Нажимаем на кнопку
//                 let addMessage = (text) => {
//                     store.dispatch(addMyMessageActionCreator(text));
//                 };
//                 //FLUX система. Обработчик изменений в textarea
//                 let onChangeMessage = (text) => {
//                     store.dispatch(updateNewMessageActionCreator(text));
//                 }
//                 return <div>
//                     <Messages addMessage={addMessage}
//                               onChangeMessage={onChangeMessage}
//                               userItemData={store.getState().messagesPage.userItemData}
//                               messagesData={store.getState().messagesPage.messagesData}
//                               updateMessage={store.getState().messagesPage.updateMessage}
//                     />
//                 </div>
//             }}
//         </StoreContext.Consumer>
//     );
// }
//
// export default MessagesContainer;