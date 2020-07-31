import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profilePageReducer";
import {withRouter} from "react-router-dom";

class ProfileAJAX extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
                //общие props: state(profile),dispatch(setUserProfile) + withRouter(history,location,match)
                console.log(this.props);
            })
    }
    render() {
        return (
            <Profile {...this.state} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

let UrlProfileContainer = withRouter(ProfileAJAX);
const ProfileContainer = connect(mapStateToProps, {setUserProfile})(UrlProfileContainer);
export default ProfileContainer;