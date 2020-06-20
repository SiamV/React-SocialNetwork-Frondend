import React from 'react';
import './App.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Friends from "./components/Friends";
import Feed from "./components/Feed";
import Messages from "./components/Messages";


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