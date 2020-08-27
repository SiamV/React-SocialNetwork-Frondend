import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter, Route} from "react-router-dom";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Feed/ProfileContainer";
import AccountContainer from "./components/Account/AccountContainer";
import NewsFriendsContainer from "./components/Newsfriends/NewsFriendsContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {ThunkCreatorInitialized} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/store-redux";

// import FriendContainer from "./components/Friends/FriendContainer";
// import NewsGroupsContainer from "./components/NewsGroups/NewsGroupsContainer";
const FriendContainer = React.lazy(() => import ("./components/Friends/FriendContainer"));
const NewsGroupsContainer = React.lazy(() => import("./components/NewsGroups/NewsGroupsContainer"));

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
                <div className={'site-wrapper-friends'}>
                    return <React.Suspense fallback={<Preloader />}>
                    <FriendContainer />
                </React.Suspense></div>
                <div className={'site-wrapper-feed'}>
                    <Route path={'/news'} component={NewsFriendsContainer} />
                    <Route path={'/groups'} render={() => {
                        return <React.Suspense fallback={<Preloader />}>
                            <NewsGroupsContainer />
                        </React.Suspense>
                    }} />
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