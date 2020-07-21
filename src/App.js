import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Account from "./components/Account/Account";
import Profile from "./components/Feed/Profile";
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter, Route} from "react-router-dom";
import NewsFriends from "./components/Newsfriends/NewsFriends";
import NewsGroupsContainer from "./components/NewsGroups/NewsGroupsContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";
import FriendContainer from "./components/Friends/FriendContainer";
import Users from "./components/Users/Users";


const App = () => {
    return (
        <BrowserRouter>
            <div className={'site-wrapper'}>
                <div className={'site-wrapper-header'}><Header /></div>
                <div className={'site-wrapper-nav'}><Nav /></div>
                <div className={'site-wrapper-account'}><Account /></div>
                <div className={'site-wrapper-friends'}><FriendContainer /></div>
                <div className={'site-wrapper-feed'}>
                    <Route path={'/profile'} render={() =>
                        <Profile />
                    } />
                    <Route path={'/messages'} render={() =>
                        <MessagesContainer />
                    } />
                    <Route path={'/groups'} render={() =>
                        <NewsGroupsContainer />
                    } />
                    <Route path={'/news'} component={NewsFriends} />
                    <Route path={'/users'} render={() =>
                        <Users />
                    } />
                </div>
                <div className={'site-wrapper-sidebar'}><Sidebar /></div>
            </div>
        </BrowserRouter>
    );
}

export default App;


// const App = (props) => {
//     return (
//         <BrowserRouter>
//             <div className={'site-wrapper'}>
//                 <div className={'site-wrapper-header'}><Header /></div>
//                 <div className={'site-wrapper-nav'}><Nav /></div>
//                 <div className={'site-wrapper-account'}><Account /></div>
//                 <div className={'site-wrapper-friends'}>
//                     <Friends myFriendsData={props.myState.friendsPage.myFriendsData}/>
//                 </div>
//                 <div className={'site-wrapper-feed'}>
//                     <Route path={'/profile'} render={() =>
//                         <Profile
//                             myPostsData={props.myState.profilePage.myPostsData}
//                             newPostAdd={props.myState.profilePage.newPostAdd}
//                             updateNewPost={props.updateNewPost}
//                             addPost={props.addPost}
//                         />} />
//                     <Route path={'/messages'} render={() =>
//                         <Messages
//                             userItemData={props.myState.messagesPage.userItemData}
//                             messagesData={props.myState.messagesPage.messagesData}
//                             addMessage={props.addMessage}
//                             updateMessage={props.myState.messagesPage.updateMessage}
//                             updateNewMessage={props.updateNewMessage}
//                         />} />
//                     <Route path={'/news'} component={NewsFriends} />
//                     <Route path={'/groups'} component={NewsGroups} />
//                 </div>
//                 <div className={'site-wrapper-sidebar'}><Sidebar /></div>
//             </div>
//         </BrowserRouter>
//     );
// }
//
// export default App;