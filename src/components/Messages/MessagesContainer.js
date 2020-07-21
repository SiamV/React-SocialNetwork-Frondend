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