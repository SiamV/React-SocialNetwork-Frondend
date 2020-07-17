const ADD_MY_MESSAGE = 'ADD-MY-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

export const addMyMessageActionCreator = (text) => {
    return {type: ADD_MY_MESSAGE, postMessage: text}
}

export const updateNewMessageActionCreator = (text) => {
    return {type: UPDATE_NEW_MESSAGE, newSymbol: text}
}

let initialState = {
    userItemData: [
        {id: 1, name: "Andrew"},
        {id: 2, name: "Sveta"},
        {id: 3, name: "Egor"},
        {id: 4, name: "Natasha"},
        {id: 5, name: "Nikolay"}
    ],
    messagesData: [
        {id: 1, message: "Hi. My name is Andrey"},
        {id: 2, message: "Hi, Andrey. How are you?"},
        {id: 3, message: "That fine. I work in Moscow"},
        {id: 4, message: "Ok. What is your profession?"}
    ],
    updateMessage: ''
}

const messagePageReducer = (state = initialState,action) => {
    switch (action.type) {
        case ADD_MY_MESSAGE: {
            let newMessage = {
                id: 5,
                message: action.postMessage
            }
            //make the copy
            let stateCopy = {...state};
            stateCopy.messagesData = [...state.messagesData];
            //use the copy
            stateCopy.messagesData.push(newMessage);
            stateCopy.updateMessage = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE: {
            let stateCopy = {...state}
            stateCopy.updateMessage = action.newSymbol;
            return stateCopy;
        }
        default:
            return state;
    }
}

export default messagePageReducer;