import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {isLoadingUser, setUserProfile} from "../../redux/profilePageReducer";
import {withRouter} from "react-router-dom";
import {getUserProfile} from "../../api/api";

class ProfileAJAX extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
            this.props.isLoadingUser(true);
        getUserProfile(userId)
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(data => {
                this.props.isLoadingUser(false);
                this.props.setUserProfile(data);
                //общие props: state(profile),dispatch(setUserProfile) + withRouter(history,location,match)
            })
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

let UrlProfileContainer = withRouter(ProfileAJAX);
const ProfileContainer = connect(mapStateToProps, {setUserProfile,isLoadingUser})(UrlProfileContainer);
export default ProfileContainer;