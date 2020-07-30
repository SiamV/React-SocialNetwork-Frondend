import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setIsLoading,
    setTotalCountUsers,
    setUsers,
    unfollow
} from "../../redux/usersReducer";
import Users from "./Users";
import * as axios from "axios";
import Preloader from "../common/Preloader/Preloader";

class UsersAJAX extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        //page - текущая страница, count - число пользователей на страницу
        this.props.setIsLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.countUsersPage}`)
            .then(response => {
                this.props.setIsLoading(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalCountUsers(response.data.totalCount);
                console.log(response);
            })
    }

    //отправка get запроса при нажатии на цифры в span
    onPageChange = (page) => {
        this.props.setIsLoading(true);
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.countUsersPage}`)
            .then(response => {
                this.props.setIsLoading(false);
                this.props.setUsers(response.data.items);
            })
    }

    render() {
        return (
            <>
                {this.props.isLoading ? <Preloader /> :null}
                <Users totalCountUsers={this.props.totalCountUsers}
                       countUsersPage={this.props.countUsersPage}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       unfollow={this.props.unfollow}
                       follow={this.props.follow}
                       onPageChange={this.onPageChange}
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
        isLoading: state.usersPage.isLoading
    }
}

const UsersContainer = connect(mapStateToProps,
    {
    follow,
    unfollow,
    setUsers,
    setTotalCountUsers,
    setCurrentPage,
    setIsLoading})(UsersAJAX)

export default UsersContainer;


// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setTotalCountUsers: (totalUsers) => {
//             dispatch(setTotalCountUsersAC(totalUsers))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setIsLoading: (isLoading) => {
//             dispatch(setIsLoadingAC(isLoading))
//         }
//     }
// }