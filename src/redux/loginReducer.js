import {authMe, loginAPI} from "../api/api";
import {stopSubmit} from "redux-form";

let defaultState = {
    id: null,
    login: null,
    email: null,
    isLogin: false
}

const loginReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_MY_DATA: {
            return {
                ...state,
                ...action.data
            }
        }
        default:
            return state;
    }
}

const SET_MY_DATA = 'loginReducer/SET_MY_DATA';

export const setMyData = (id, login, email, isLogin) => ({
    type: SET_MY_DATA,
    data: {id, login, email, isLogin}
})

export const loginThunkCreator = () => {
    return (
        (dispatch) => {
            return authMe() //return чтобы promise вернулся наружу. Мы его используем в appReducer
                .then(data => {
                    if (data.resultCode === 0) {
                        dispatch(setMyData(data.data.id, data.data.login, data.data.email, true));
                    }
                })
        }
    )
}

export const loginSiteThunkCreator = (email, password, rememberMe) => async (dispatch) => {
    let response = await loginAPI.loginPostAPI(email, password, rememberMe)

            if (response.data.resultCode === 0) {
                dispatch(loginThunkCreator())
            } else {
                // надо плюсом использовать каптчу
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error' //
                dispatch(stopSubmit('login', {_error: message}))
            }
}

export const logoutSiteThunkCreator = () => async (dispatch) => {
    let response = await loginAPI.logoutDeleteAPI()

            if (response.data.resultCode === 0) {
                dispatch(setMyData(null, null, null, false))
            }
}

export default loginReducer;