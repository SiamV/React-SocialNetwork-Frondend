import {applyMiddleware, combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePageReducer";
import messagePageReducer from "./messagesPageReducer";
import friendsPageReducer from "./friendsPageReducer"
import newsGroupsPageReducer from "./newsGroupsPageReducer";
import usersReducer from "./usersReducer";
import loginReducer from "./loginReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import appReducer from "./appReducer";


let reducersStack = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagePageReducer,
    friendsPage: friendsPageReducer,
    newsGroupsPage: newsGroupsPageReducer,
    usersPage: usersReducer,
    login: loginReducer,
    form: formReducer,
    app: appReducer
})

let store = createStore(reducersStack, applyMiddleware(thunkMiddleware));

export default store;