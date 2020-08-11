import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfileThunkCreator,
    getUserStatusThunkCreator,
    updateUserStatusThunkCreator
} from "../../redux/profilePageReducer";
import {withRouter} from "react-router-dom";

class ProfileAJAX extends React.Component {
    componentDidMount() {
        //данные о userId из withRouter
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 9640;
        }
        //use thunk
        this.props.getUserProfileThunkCreator(userId);
        this.props.getUserStatusThunkCreator(userId);
    }

    render() {
        return (
            <Profile {...this.state} profile={this.props.profile} isLoading={this.props.isLoading}
                     status={this.props.status} updateStatus={this.props.updateUserStatusThunkCreator}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isLoading: state.profilePage.isLoading,
        status: state.profilePage.status
    }
}

//общие props: state(profile),dispatch(setUserProfile) + withRouter(history,location,match)
let UrlProfileContainer = withRouter(ProfileAJAX);
const ProfileContainer = connect(mapStateToProps, {
    getUserProfileThunkCreator,
    getUserStatusThunkCreator, updateUserStatusThunkCreator
})(UrlProfileContainer);
export default ProfileContainer;