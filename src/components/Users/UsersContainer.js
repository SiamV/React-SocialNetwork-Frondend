import React from "react";
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    getUsersThunk,
    setButtonDisabling,
    unfollowThunkCreator,
    followThunkCreator
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withLoginRedirect} from "../HOC/withLoginRedirect";
import {
    getCountUsersPage,
    getCurrentPage, getIsButtonDisabling,
    getIsLoading,
    getTotalCountUsers,
    getUsers
} from "../../redux/usersSelectors";
import {getIsLoginSelector} from "../../redux/loginSelectors";

class UsersAJAX extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        //dispatch thunk
        this.props.getUsersThunk(this.props.currentPage, this.props.countUsersPage);
    }

    //отправка get запроса при нажатии на цифры в span
    onPageChange = (page) => {
        //dispatch thunk
        this.props.getUsersThunk(page, this.props.countUsersPage)
    }

    render() {
        return (
            <>
                {this.props.isLoading ? <Preloader /> : null}
                <Users totalCountUsers={this.props.totalCountUsers}
                       countUsersPage={this.props.countUsersPage}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       onPageChange={this.onPageChange}
                       isButtonDisabling={this.props.isButtonDisabling}
                       unfollowThunkCreator={this.props.unfollowThunkCreator}
                       followThunkCreator={this.props.followThunkCreator}
                />
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        countUsersPage: getCountUsersPage(state),
        totalCountUsers: getTotalCountUsers(state),
        currentPage: getCurrentPage(state),
        isLoading: getIsLoading(state),
        isButtonDisabling: getIsButtonDisabling(state),
        isLogin: getIsLoginSelector(state)
    }
}

const LoginForm = withLoginRedirect(UsersAJAX);
const UsersContainer = connect(mapStateToProps,
    {
        follow,
        unfollow,
        setButtonDisabling,
        getUsersThunk,
        unfollowThunkCreator,
        followThunkCreator
    })(LoginForm)
export default UsersContainer;