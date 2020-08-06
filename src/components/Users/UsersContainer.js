import React from "react";
import {connect} from "react-redux";
import {follow, unfollow, getUsersThunk, setButtonDisabling} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

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
        // this.props.setIsLoading(true);
        // this.props.setCurrentPage(page)
        // getUsers(page, this.props.countUsersPage)
        //     .then(data => {
        //         this.props.setIsLoading(false);
        //         this.props.setUsers(data.items);
        //     })
    }

    render() {
        return (
            <>
                {this.props.isLoading ? <Preloader /> : null}
                <Users totalCountUsers={this.props.totalCountUsers}
                       countUsersPage={this.props.countUsersPage}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       unfollow={this.props.unfollow}
                       follow={this.props.follow}
                       onPageChange={this.onPageChange}
                       setButtonDisabling={this.props.setButtonDisabling}
                       isButtonDisabling={this.props.isButtonDisabling}
                />
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        countUsersPage: state.usersPage.countUsersPage,
        totalCountUsers: state.usersPage.totalCountUsers,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        isButtonDisabling: state.usersPage.isButtonDisabling
    }
}

const UsersContainer = connect(mapStateToProps,
    {
        follow,
        unfollow,
        setButtonDisabling,
        getUsersThunk
    })(UsersAJAX)

export default UsersContainer;