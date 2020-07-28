import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalCountUsersAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        countUsersPage: state.usersPage.countUsersPage,
        totalCountUsers: state.usersPage.totalCountUsers,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setTotalCountUsers: (totalUsers) => {
            dispatch(setTotalCountUsersAC(totalUsers))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;