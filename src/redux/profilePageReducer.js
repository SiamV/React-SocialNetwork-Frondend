const ADD_MY_POST = 'ADD-MY-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

export const addMyPostActionCreator = (text) => {
    return {type: ADD_MY_POST, postMessage: text}
}

export const updateNewPostActionCreator = (text) => {
    return {type: UPDATE_NEW_POST, newSymbol: text}
}

//state default
let initialState = {
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
}

const profilePageReducer = (state = initialState, action) => {
    if (action.type === ADD_MY_POST) {
        let newPost = {
            id: 4,
            post: action.postMessage,
            like: 0
        }
        state.myPostsData.push(newPost);
        state.newPostAdd = '';
    } else if (action.type === UPDATE_NEW_POST) {
        state.newPostAdd = action.newSymbol;
    }

    return state;
}

export default profilePageReducer;