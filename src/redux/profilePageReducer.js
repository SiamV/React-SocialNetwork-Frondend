//state default
import {getUserProfile, getUsersStatus, updateUsersStatus} from "../api/api";

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
    profile: null,
    isLoading: false,
    status: ''
}

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MY_POST: {
            let newPost = {
                id: 4,
                post: action.postMessage,
                like: 0
            }
            //make the copy и логика. Return копии части state, которую мы меняем. Option 2.
            return {
                ...state,
                myPostsData: [...state.myPostsData, newPost],
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case IS_LOADING_USER: {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        case SET_USERS_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}

const ADD_MY_POST = 'ADD-MY-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const IS_LOADING_USER = 'IS_LOADING_USER';
const SET_USERS_STATUS = 'SET_USERS_STATUS';

export const addPost = (text) => {
    return {type: ADD_MY_POST, postMessage: text}
}

export const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile: profile}
}

export const isLoadingUser = (isLoading) => {
    return {type: IS_LOADING_USER, isLoading: isLoading}
}

export const setUsersStatus = (status) => {
    return {type: SET_USERS_STATUS, status: status}
}

export const getUserProfileThunkCreator = (userId) => {
    return (
        (dispatch) => {
            dispatch(isLoadingUser(true));
            getUserProfile(userId)
                .then(data => {
                    dispatch(isLoadingUser(false));
                    dispatch(setUserProfile(data));

                })
        }
    )
}

export const getUserStatusThunkCreator = (userId) => {
    return (
        (dispatch) => {
            getUsersStatus(userId)
                .then(data => {
                    dispatch(setUsersStatus(data));
                })
        }
    )
}

export const updateUserStatusThunkCreator = (status) => {
    return (
        (dispatch) => {
            updateUsersStatus(status)
                .then(data => {
                    if (data.resultCode === 0) {
                        dispatch(setUsersStatus(status))
                    }
                })
        }
    )
}

export default profilePageReducer;