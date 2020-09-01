//state default
import {APIsavePhoto, getUserProfile, getUsersStatus, updateUsersStatus} from "../api/api";

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
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }
        default:
            return state;
    }
}

const ADD_MY_POST = 'profilePageReducer/ADD-MY-POST';
const SET_USER_PROFILE = 'profilePageReducer/SET_USER_PROFILE';
const IS_LOADING_USER = 'profilePageReducer/IS_LOADING_USER';
const SET_USERS_STATUS = 'profilePageReducer/SET_USERS_STATUS';
const SAVE_PHOTO_SUCCESS = 'profilePageReducer/SAVE_PHOTO_SUCCESS'

//our posts
export const addPost = (text) => {
    return {type: ADD_MY_POST, postMessage: text}
}

export const changeAvatar = (photos) => {
    return {type: SAVE_PHOTO_SUCCESS, photos: photos}
}

//set profile other users
export const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile: profile}
}

export const isLoadingUser = (isLoading) => {
    return {type: IS_LOADING_USER, isLoading: isLoading}
}

export const setUsersStatus = (status) => {
    return {type: SET_USERS_STATUS, status: status}
}

export const getUserProfileThunkCreator = (userId) => async (dispatch) => {
    dispatch(isLoadingUser(true));
    let data = await getUserProfile(userId)
    dispatch(isLoadingUser(false));
    dispatch(setUserProfile(data));
}

export const getUserStatusThunkCreator = (userId) => async (dispatch) => {
    let data = await getUsersStatus(userId)
    dispatch(setUsersStatus(data));
}

export const updateUserStatusThunkCreator = (status) => async (dispatch) => {
    let data = await updateUsersStatus(status)
    if (data.resultCode === 0) {
        dispatch(setUsersStatus(status))
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await APIsavePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(changeAvatar(response.data.data.photos))
    }
}

export default profilePageReducer;