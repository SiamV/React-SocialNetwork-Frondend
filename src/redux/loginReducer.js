import {authMe} from "../api/api";

let defaultState = {
    id: null,
    login: null,
    email: null,
    isLogin: false
}

const loginReducer = (state=defaultState, action) => {
    switch (action.type) {
        case SET_MY_DATA: {
            return {
                ...state,
                ...action.data,
                isLogin: true
            }
        }
        default:
            return state;
    }
}

const SET_MY_DATA = 'SET_MY_DATA';

export const setMyData = (id,login,email) => ({
    type: SET_MY_DATA,
    data: {id,login,email}
})

export const loginThunkCreator = () => {
    return(
        (dispatch) => {
            authMe()
                .then(data => {
                    if (data.resultCode === 0){
                        dispatch(setMyData(data.data.id, data.data.login, data.data.email));
                    }
                })
        }
    )
}

export default loginReducer;