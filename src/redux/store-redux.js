import {applyMiddleware, combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePageReducer";
import messagePageReducer from "./messagesPageReducer";
import friendsPageReducer from "./friendsPageReducer"
import newsGroupsPageReducer from "./newsGroupsPageReducer";
import usersReducer from "./usersReducer";
import loginReducer from "./loginReducer";
import thunk from "redux-thunk";


let reducersStack = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagePageReducer,
    friendsPage: friendsPageReducer,
    newsGroupsPage: newsGroupsPageReducer,
    usersPage: usersReducer,
    login: loginReducer
})

let store = createStore(reducersStack, applyMiddleware(thunk));

export default store;