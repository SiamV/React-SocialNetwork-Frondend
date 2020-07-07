import {rerenderTree} from "../render";


let state = {
    profilePage: {
        myPostsData: [{
            id: 1, post: 'Назовем эту рубрику «Магия CSS». Думаю, это точно описывает то, о чем я буду' +
                ' рассказывать. Освоив эту магию тебя уже не будут пугать макеты дизайнеров, которые решили поддаться' +
                ' своей фантазии, ты сможешь воплотить все что угодно. Эта статья будет посвящена тому, как создать' +
                ' нестандартное обтекание текста. Узнаешь о некоторых свойствах CSS, которые наверняка редко используешь' +
                ' в работе.', like: 150
        },
            {
                id: 2, post: 'Эта функция — компонент, потому что она получает данные в одном объекте («пропсы») в' +
                    ' качестве параметра и возвращает React-элемент. Мы будем называть такие компоненты «функциональными»,' +
                    ' так как они буквально являются функциями.', like: 200
            },
            {
                id: 3, post: 'Компоненты могут ссылаться на другие компоненты в возвращённом ими дереве. Это' +
                    ' позволяет нам использовать одну и ту же абстракцию — компоненты — на любом уровне нашего приложения.' +
                    ' Неважно, пишем ли мы кнопку, форму или целый экран: все они, как правило, представляют собой' +
                    ' компоненты в React-приложениях.', like: 120
            }]
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
        ]
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

}

export let addMyPost = (postMessage) => {
    let newPost = {
        id:4,
        post: postMessage,
        like: 0
    }
    state.profilePage.myPostsData.push(newPost);
    rerenderTree(state);
}

export let addMyMessage = (postMessage) => {
    let newMessage = {
        id: 5,
        message: postMessage
    }
    state.messagesPage.messagesData.push(newMessage);
    rerenderTree(state);
}

export default state;