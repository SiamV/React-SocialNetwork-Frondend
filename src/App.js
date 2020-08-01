import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter, Route} from "react-router-dom";
import NewsFriends from "./components/Newsfriends/NewsFriends";
import NewsGroupsContainer from "./components/NewsGroups/NewsGroupsContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";
import FriendContainer from "./components/Friends/FriendContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Feed/ProfileContainer";
import AccountContainer from "./components/Account/AccountContainer";


const App = () => {
    return (
        <BrowserRouter>
            <div className={'site-wrapper'}>
                <div className={'site-wrapper-header'}><Header /></div>
                <div className={'site-wrapper-nav'}><Nav /></div>
                <div className={'site-wrapper-account'}><AccountContainer /></div>
                <div className={'site-wrapper-friends'}><FriendContainer /></div>
                <div className={'site-wrapper-feed'}>
                    <Route path={'/profile/:userId?'} render={() =>
                        <ProfileContainer />
                    } />
                    <Route path={'/messages'} render={() =>
                        <MessagesContainer />
                    } />
                    <Route path={'/groups'} render={() =>
                        <NewsGroupsContainer />
                    } />
                    <Route path={'/news'} component={NewsFriends} />
                    <Route path={'/users'} render={() =>
                        <UsersContainer />
                    } />
                </div>
                <div className={'site-wrapper-sidebar'}><Sidebar /></div>
            </div>
        </BrowserRouter>
    );
}

export default App;