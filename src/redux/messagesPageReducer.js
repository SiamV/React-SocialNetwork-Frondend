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
}

const messagePageReducer = (state = initialState,action) => {
    switch (action.type) {
        case ADD_MY_MESSAGE: {
            let newMessage = {
                id: 5,
                message: action.postMessage
            }
            //make the copy и логика. Return копии части state, которую мы меняем. Option 2.
            return {...state,
                messagesData: [...state.messagesData, newMessage],
            };
        }
        default:
            return state;
    }
}

const ADD_MY_MESSAGE = 'messagePageReducer/ADD-MY-MESSAGE';

export const addMessage = (text) => {
    return {type: ADD_MY_MESSAGE, postMessage: text}
}


export default messagePageReducer;