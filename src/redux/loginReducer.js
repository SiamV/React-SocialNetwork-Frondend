import {authMe, loginAPI} from "../api/api";

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

const SET_MY_DATA = 'SET_MY_DATA';

export const setMyData = (id, login, email, isLogin) => ({
    type: SET_MY_DATA,
    data: {id, login, email, isLogin}
})

export const loginThunkCreator = () => {
    return (
        (dispatch) => {
            authMe()
                .then(data => {
                    if (data.resultCode === 0) {
                        dispatch(setMyData(data.data.id, data.data.login, data.data.email, true));
                    }
                })
        }
    )
}

export const loginSiteThunkCreator = (email, password, rememberMe) => (dispatch) => {
    loginAPI.loginPostAPI(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(loginThunkCreator())
            }
        })
}

export const logoutSiteThunkCreator = () => (dispatch) => {
    loginAPI.logoutDeleteAPI()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setMyData(null, null, null, false))
            }
        })
}

export default loginReducer;