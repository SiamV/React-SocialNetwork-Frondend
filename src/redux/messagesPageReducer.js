const ADD_MY_MESSAGE = 'ADD-MY-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

export const addMyMessageActionCreator = (text) => {
    return {type: ADD_MY_MESSAGE, postMessage: text}
}

export const updateNewMessageActionCreator = (text) => {
    return {type: UPDATE_NEW_MESSAGE, newSymbol: text}
}

const messagePageReducer = (state,action) => {
    if (action.type === ADD_MY_MESSAGE) {
        let newMessage = {
            id: 5,
            message: action.postMessage
        }
        state.messagesData.push(newMessage);
        state.updateMessage = '';
    } else if (action.type === UPDATE_NEW_MESSAGE) {
        state.updateMessage = action.newSymbol;
    }

    return state;
}

export default messagePageReducer;