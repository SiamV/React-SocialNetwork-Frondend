import {loginThunkCreator} from "./loginReducer";

let stateDefault = {
    initialized: false
}
const appReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}
const SET_INITIALIZED = 'appReducer/SET_INITIALIZED';
export const InitializeReady = () => ({type: SET_INITIALIZED})

export const ThunkCreatorInitialized = () => (dispatch) => {
    //диспатчим InitializeReady только после возврата обещания, что loginThunkCreator вернул данные с сервера
    let promise = dispatch(loginThunkCreator());
    promise.then( () => {
        dispatch(InitializeReady())
    })
//Если диспатчей много, то для каждого свой промис
// Promise.all ([promise1, promise2])
//     .then( () => {
//     dispatch(InitializeReady())
// })

}

export default appReducer;
