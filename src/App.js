import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Friends from "./components/Friends/Friends";
import Feed from "./components/Feed/Feed";
import Messages from "./components/Messages/Messages";
import Sidebar from "./components/Sidebar/Sidebar";


const App = () => {
    return (
        <div className={'site-wrapper'}>
            <Header />
            <Nav />
            <Profile />
            <div className={'site-wrapper-friends'}>
                <Friends />
            </div>
            <div className={'site-wrapper-feed'}>
                <Feed />
                {/*<Messages />*/}
            </div>
            <div className={'site-wrapper-sidebar'}>
                <Sidebar />
            </div>
        </div>
    );
}

export default App;