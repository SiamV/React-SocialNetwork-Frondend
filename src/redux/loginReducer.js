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

export default loginReducer;