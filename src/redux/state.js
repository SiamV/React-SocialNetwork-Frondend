let store = {
    _state: {
        profilePage: {
            myPostsData: [{
                id: 1, post: 'Назовем эту рубрику «Магия CSS». Думаю, это точно описывает то, о чем я буду' +
                    ' рассказывать. Освоив эту магию тебя уже не будут пугать макеты дизайнеров, которые решили поддаться' +
                    ' своей фантазии, ты сможешь воплотить все что угодно. Эта статья будет посвящена тому, как создать' +
                    ' нестандартное обтекание текста. Узнаешь о некоторых свойствах CSS, которые наверняка редко используешь' +
                    ' в работе.', like: 150
            },
                {
                    id: 2,
                    post: 'Эта функция — компонент, потому что она получает данные в одном объекте («пропсы») в' +
                        ' качестве параметра и возвращает React-элемент. Мы будем называть такие компоненты «функциональными»,' +
                        ' так как они буквально являются функциями.',
                    like: 200
                },
                {
                    id: 3, post: 'Компоненты могут ссылаться на другие компоненты в возвращённом ими дереве. Это' +
                        ' позволяет нам использовать одну и ту же абстракцию — компоненты — на любом уровне нашего приложения.' +
                        ' Неважно, пишем ли мы кнопку, форму или целый экран: все они, как правило, представляют собой' +
                        ' компоненты в React-приложениях.', like: 120
                }],
            newPostAdd: ''
        },

        messagesPage: {
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
        },

        friendsPage: {
            myFriendsData: [
                {id: 1, name: "Fedor", link: "/fedor"},
                {id: 2, name: "Nastya", link: "/nastya"},
                {id: 3, name: "Nikolay", link: "/nikolay"},
                {id: 4, name: "Max", link: "/max"},
                {id: 5, name: "Viktor", link: "/viktor"},
                {id: 6, name: "Anna", link: "/anna"}
            ]
        }
    },
    _callSubscriber() {
    },
    //вызываем subscribe, в observer которого сидит rerenderTree
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action) { //{type: 'ADD-MY-POST'}
        if (action.type === 'ADD-MY-POST') {
            let newPost = {
                id: 4,
                post: action.postMessage,
                like: 0
            }
            this._state.profilePage.myPostsData.push(newPost);
            this._state.profilePage.newPostAdd = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST') {
            this._state.profilePage.newPostAdd = action.newSymbol;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-MY-MESSAGE') {
            let newMessage = {
                id: 5,
                message: action.postMessage
            }
            this._state.messagesPage.messagesData.push(newMessage);
            this._state.messagesPage.updateMessage = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE') {
            this._state.messagesPage.updateMessage = action.newSymbol;
            this._callSubscriber(this._state);
        }
    }

    // addMyPost (postMessage) {
    //     let newPost = {
    //         id:4,
    //         post: postMessage,
    //         like: 0
    //     }
    //     this._state.profilePage.myPostsData.push(newPost);
    //     this._state.profilePage.newPostAdd = '';
    //     this._callSubscriber(this._state);
    // },
    // addMyMessage (postMessage) {
    //     let newMessage = {
    //         id: 5,
    //         message: postMessage
    //     }
    //     this._state.messagesPage.messagesData.push(newMessage);
    //     this._state.messagesPage.updateMessage = '';
    //     this._callSubscriber(this._state);
    // },
    // updateNewPost (newSymbol) {
    //     this._state.profilePage.newPostAdd = newSymbol;
    //     this._callSubscriber(this._state);
    // },
    // updateNewMessage(newSymbol) {
    //     this._state.messagesPage.updateMessage = newSymbol;
    //     this._callSubscriber(this._state);
    // },

}

export default store;


// let rerenderTree = () => {}
//
// let state = {
//     profilePage: {
//         myPostsData: [{
//             id: 1, post: 'Назовем эту рубрику «Магия CSS». Думаю, это точно описывает то, о чем я буду' +
//                 ' рассказывать. Освоив эту магию тебя уже не будут пугать макеты дизайнеров, которые решили поддаться' +
//                 ' своей фантазии, ты сможешь воплотить все что угодно. Эта статья будет посвящена тому, как создать' +
//                 ' нестандартное обтекание текста. Узнаешь о некоторых свойствах CSS, которые наверняка редко используешь' +
//                 ' в работе.', like: 150
//         },
//             {
//                 id: 2, post: 'Эта функция — компонент, потому что она получает данные в одном объекте («пропсы») в' +
//                     ' качестве параметра и возвращает React-элемент. Мы будем называть такие компоненты «функциональными»,' +
//                     ' так как они буквально являются функциями.', like: 200
//             },
//             {
//                 id: 3, post: 'Компоненты могут ссылаться на другие компоненты в возвращённом ими дереве. Это' +
//                     ' позволяет нам использовать одну и ту же абстракцию — компоненты — на любом уровне нашего приложения.' +
//                     ' Неважно, пишем ли мы кнопку, форму или целый экран: все они, как правило, представляют собой' +
//                     ' компоненты в React-приложениях.', like: 120
//             }],
//         newPostAdd: ''
//     },
//
//     messagesPage: {
//         userItemData: [
//             {id: 1, name: "Andrew"},
//             {id: 2, name: "Sveta"},
//             {id: 3, name: "Egor"},
//             {id: 4, name: "Natasha"},
//             {id: 5, name: "Nikolay"}
//         ],
//         messagesData: [
//             {id: 1, message: "Hi. My name is Andrey"},
//             {id: 2, message: "Hi, Andrey. How are you?"},
//             {id: 3, message: "That fine. I work in Moscow"},
//             {id: 4, message: "Ok. What is your profession?"}
//         ],
//         updateMessage: ''
//     },
//
//     friendsPage: {
//         myFriendsData: [
//             {id: 1, name: "Fedor", link: "/fedor"},
//             {id: 2, name: "Nastya", link: "/nastya"},
//             {id: 3, name: "Nikolay", link: "/nikolay"},
//             {id: 4, name: "Max", link: "/max"},
//             {id: 5, name: "Viktor", link: "/viktor"},
//             {id: 6, name: "Anna", link: "/anna"}
//         ]
//     }
//
// }
//
// export const addMyPost = (postMessage) => {
//     let newPost = {
//         id:4,
//         post: postMessage,
//         like: 0
//     }
//     state.profilePage.myPostsData.push(newPost);
//     state.profilePage.newPostAdd = '';
//     rerenderTree(state);
// }
//
// export const addMyMessage = (postMessage) => {
//     let newMessage = {
//         id: 5,
//         message: postMessage
//     }
//     state.messagesPage.messagesData.push(newMessage);
//     state.messagesPage.updateMessage = '';
//     rerenderTree(state);
// }
//
// export const updateNewPost = (newSymbol) => {
//     state.profilePage.newPostAdd = newSymbol;
//     rerenderTree(state);
// }
//
// export const updateNewMessage = (newSymbol) => {
//     state.messagesPage.updateMessage = newSymbol;
//     rerenderTree(state);
// }
//
// //вызываем subscribe, в observer которого сидит rerenderTree
// export let subscribe = (observer) => {
//     rerenderTree = observer;
// }
//
// export default state;