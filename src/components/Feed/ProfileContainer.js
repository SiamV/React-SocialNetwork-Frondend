import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfileThunkCreator,
    getUserStatusThunkCreator, savePhoto,
    updateUserStatusThunkCreator
} from "../../redux/profilePageReducer";
import {withRouter} from "react-router-dom";

class ProfileAJAX extends React.Component {
    componentDidMount() {
        //данные о userId из withRouter
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.myUserId;
            if (!userId) {
                this.props.history.push('/login')
            } //if do logout we haven't stay in url/profile. Почему-то не переходит
        }
        //use thunk
        this.props.getUserProfileThunkCreator(userId);
        this.props.getUserStatusThunkCreator(userId);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId !== prevProps.match.params.userId) {
            //данные о userId из withRouter
            let userId = this.props.match.params.userId;
            if (!userId) {
                userId = this.props.myUserId;
                if (!userId) {
                    this.props.history.push('/login')
                } //if do logout we haven't stay in url/profile. Почему-то не переходит
            }
            //use thunk
            this.props.getUserProfileThunkCreator(userId);
            this.props.getUserStatusThunkCreator(userId);
        }
    }

    render() {
        return (
            <Profile {...this.state}
                     profile={this.props.profile}
                     isLoading={this.props.isLoading}
                     status={this.props.status}
                     updateStatus={this.props.updateUserStatusThunkCreator}
                     isOwner ={this.props.match.params.userId}
                     savePhoto={this.props.savePhoto}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isLoading: state.profilePage.isLoading,
        status: state.profilePage.status,
        myUserId: state.login.id,
        isLogin: state.login.isLogin //пока не используется
    }
}

//общие props: state(profile),dispatch(setUserProfile) + withRouter(history,location,match)
let UrlProfileContainer = withRouter(ProfileAJAX);
const ProfileContainer = connect(mapStateToProps, {
    getUserProfileThunkCreator,
    getUserStatusThunkCreator, updateUserStatusThunkCreator,
    savePhoto
})(UrlProfileContainer);
export default ProfileContainer;