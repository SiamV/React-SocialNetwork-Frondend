import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Account from "./components/Account/Account";
import Friends from "./components/Friends/Friends";
import Profile from "./components/Feed/Profile";
import Messages from "./components/Messages/Messages";
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter, Route} from "react-router-dom";
import NewsFriends from "./components/Newsfriends/NewsFriends";
import NewsGroups from "./components/NewsGroups/NewsGroups";
import {addMyPost} from "./redux/state";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className={'site-wrapper'}>
                <div className={'site-wrapper-header'}><Header /></div>
                <div className={'site-wrapper-nav'}><Nav /></div>
                <div className={'site-wrapper-account'}><Account /></div>
                <div className={'site-wrapper-friends'}><Friends myFriendsData={props.myState.friendsPage.myFriendsData}/></div>
                <div className={'site-wrapper-feed'}>
                    <Route path={'/profile'} render={() =>
                        <Profile
                            myPostsData={props.myState.profilePage.myPostsData}
                            addPost={props.addPost}
                        />} />
                    <Route path={'/messages'} render={() =>
                        <Messages
                            userItemData={props.myState.messagesPage.userItemData}
                            messagesData={props.myState.messagesPage.messagesData}
                            addMessage={props.addMessage}
                        />} />
                    <Route path={'/news'} component={NewsFriends} />
                    <Route path={'/groups'} component={NewsGroups} />
                </div>
                <div className={'site-wrapper-sidebar'}><Sidebar /></div>
            </div>
        </BrowserRouter>
    );
}

export default App;