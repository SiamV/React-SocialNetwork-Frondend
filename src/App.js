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


const App = (props) => {
    return (
        <BrowserRouter>
            <div className={'site-wrapper'}>
                <div className={'site-wrapper-header'}><Header /></div>
                <div className={'site-wrapper-nav'}><Nav /></div>
                <div className={'site-wrapper-account'}><Account /></div>
                <div className={'site-wrapper-friends'}>
                    <Friends myFriendsData={props.myState.friendsPage.myFriendsData} />
                </div>
                <div className={'site-wrapper-feed'}>
                    <Route path={'/profile'} render={() =>
                        <Profile
                            myPostsData={props.myState.profilePage.myPostsData}
                            newPostAdd={props.myState.profilePage.newPostAdd}
                            dispatch={props.dispatch}
                        />} />
                    <Route path={'/messages'} render={() =>
                        <Messages
                            userItemData={props.myState.messagesPage.userItemData}
                            messagesData={props.myState.messagesPage.messagesData}
                            updateMessage={props.myState.messagesPage.updateMessage}
                            dispatch={props.dispatch}
                        />} />
                    <Route path={'/groups'} render={() =>
                        <NewsGroups
                            postsGroups={props.myState.newsGroupsPage.postsGroups}
                            messageData={props.myState.newsGroupsPage.newPostGroup}
                            dispatch={props.dispatch}
                        />} />
                    <Route path={'/news'} component={NewsFriends} />
                </div>
                <div className={'site-wrapper-sidebar'}><Sidebar /></div>
            </div>
        </BrowserRouter>
    );
}

export default App;


// import React from 'react';
// import './App.css';
// import Header from "./components/Header/Header";
// import Nav from "./components/Nav/Nav";
// import Account from "./components/Account/Account";
// import Friends from "./components/Friends/Friends";
// import Profile from "./components/Feed/Profile";
// import Messages from "./components/Messages/Messages";
// import Sidebar from "./components/Sidebar/Sidebar";
// import {BrowserRouter, Route} from "react-router-dom";
// import NewsFriends from "./components/Newsfriends/NewsFriends";
// import NewsGroups from "./components/NewsGroups/NewsGroups";
//
//
//
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