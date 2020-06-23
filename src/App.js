import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Friends from "./components/Friends/Friends";
import Feed from "./components/Feed/Feed";
import Messages from "./components/Messages/Messages";


const App = () => {
    return (
        <div className={'site-wrapper'}>
            <Header />
            <Nav />
            <Profile />
            <Friends />
            <Feed />
            <Messages />
        </div>
    );
}

export default App;