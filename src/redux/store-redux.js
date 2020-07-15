import {combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePageReducer";
import messagePageReducer from "./messagesPageReducer";
import friendsPageReducer from "./friendsPageReducer"
import newsGroupsPageReducer from "./newsGroupsPageReducer";


let reducersStack = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagePageReducer,
    friendsPage: friendsPageReducer,
    newsGroupsPage: newsGroupsPageReducer
})

let store = createStore(reducersStack);

export default store;