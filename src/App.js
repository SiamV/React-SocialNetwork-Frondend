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
import Newsfriends from "./components/Newsfriends/Newsfriends";
import NewsGroups from "./components/NewsGroups/NewsGroups";


const App = () => {
    return (
        <BrowserRouter>
            <div className={'site-wrapper'}>
                <div className={'site-wrapper-header'}><Header /></div>
                <div className={'site-wrapper-nav'}><Nav /></div>
                <div className={'site-wrapper-account'}><Account /></div>
                <div className={'site-wrapper-friends'}><Friends /></div>
                <div className={'site-wrapper-feed'}>
                    <Route path={'/profile'} component={Profile} />
                    <Route path={'/messages'} component={Messages} />
                    <Route path={'/news'} component={Newsfriends} />
                    <Route path={'/groups'} component={NewsGroups} />
                </div>
                <div className={'site-wrapper-sidebar'}><Sidebar /></div>
            </div>
        </BrowserRouter>
    );
}

export default App;