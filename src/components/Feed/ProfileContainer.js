import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfileThunkCreator} from "../../redux/profilePageReducer";
import {withRouter} from "react-router-dom";

class ProfileAJAX extends React.Component {
    componentDidMount() {
        //данные о userId из withRouter
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        //use thunk
        this.props.getUserProfileThunkCreator(userId)
    }
    render() {
        return (
            <Profile {...this.state} profile={this.props.profile} isLoading={this.props.isLoading}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isLoading: state.profilePage.isLoading
    }
}

//общие props: state(profile),dispatch(setUserProfile) + withRouter(history,location,match)
let UrlProfileContainer = withRouter(ProfileAJAX);
const ProfileContainer = connect(mapStateToProps, {getUserProfileThunkCreator})(UrlProfileContainer);
export default ProfileContainer;