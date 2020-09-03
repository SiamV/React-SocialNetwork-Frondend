import {authMe, loginAPI} from "../api/api";
import {stopSubmit} from "redux-form";

let defaultState = {
    id: null,
    login: null,
    email: null,
    isLogin: false,
    captchaUrl: null
}

const loginReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_MY_DATA: {
            return {
                ...state,
                ...action.data
            }
        }
        case GET_CAPTCHA_URL: {
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        }
        default:
            return state;
    }
}

const SET_MY_DATA = 'loginReducer/SET_MY_DATA';
const GET_CAPTCHA_URL = 'loginReducer/GET_CAPTCHA_URL'

export const setMyData = (id, login, email, isLogin) => ({
    type: SET_MY_DATA,
    data: {id, login, email, isLogin}
})

export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL, captchaUrl
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

export const loginSiteThunkCreator = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await loginAPI.loginPostAPI(email, password, rememberMe, captcha)

    if (response.data.resultCode === 0) {
        dispatch(loginThunkCreator())
    } else {
        //use captcha
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        //if something wrong
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

export const getCaptchaUrl = () => async (dispatch) => {
    let response = await loginAPI.getCaptchaUrl();
    let captchaUrl = response.data.url

    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export default loginReducer;