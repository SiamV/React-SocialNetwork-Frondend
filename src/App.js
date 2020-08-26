import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter, Route} from "react-router-dom";
import NewsGroupsContainer from "./components/NewsGroups/NewsGroupsContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";
import FriendContainer from "./components/Friends/FriendContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Feed/ProfileContainer";
import AccountContainer from "./components/Account/AccountContainer";
import NewsFriendsContainer from "./components/Newsfriends/NewsFriendsContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {ThunkCreatorInitialized} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/store-redux";

class App extends React.Component {
    componentDidMount() {
        this.props.ThunkCreatorInitialized();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
        return (
                <div className={'site-wrapper'}>
                    <div className={'site-wrapper-header'}><Header /></div>
                    <div className={'site-wrapper-nav'}><Nav /></div>
                    <div className={'site-wrapper-account'}><AccountContainer /></div>
                    <div className={'site-wrapper-friends'}><FriendContainer /></div>
                    <div className={'site-wrapper-feed'}>
                        <Route path={'/news'} component={NewsFriendsContainer} />
                        <Route path={'/groups'} render={() => <NewsGroupsContainer />} />
                        <Route path={'/messages'} render={() => <MessagesContainer />} />
                        <Route exact path={'/profile'} render={() => <ProfileContainer />} />
                        <Route path={'/profile/:userId'} render={() => <ProfileContainer />} />
                        <Route path={'/login'} render={() => <Login />} />
                        <Route path={'/users'} render={() => <UsersContainer />} />
                    </div>
                    <div className={'site-wrapper-sidebar'}><Sidebar /></div>
                </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
const AppContainer = connect(mapStateToProps, {ThunkCreatorInitialized})(App);

const MyProjectApp = (props) => {
    return (
            <BrowserRouter>
                <Provider store={store}>
                    <AppContainer />
                </Provider>
            </BrowserRouter>
    )
}

export default MyProjectApp;