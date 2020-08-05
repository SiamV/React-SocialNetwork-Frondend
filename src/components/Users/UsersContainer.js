import React from "react";
import {connect} from "react-redux";
import {
    follow, setButtonDisabling,
    setCurrentPage,
    setIsLoading,
    setTotalCountUsers,
    setUsers,
    unfollow
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {getUsers} from "../../api/api";

class UsersAJAX extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        //page - текущая страница, count - число пользователей на страницу
        this.props.setIsLoading(true);

        getUsers(this.props.currentPage, this.props.countUsersPage)
            .then(data => {
                this.props.setIsLoading(false);
                this.props.setUsers(data.items);
                this.props.setTotalCountUsers(data.totalCount);
            })

        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.countUsersPage}`,
        //     {withCredentials: true}
        // )
        //     .then(response => {
        //         this.props.setIsLoading(false);
        //         this.props.setUsers(response.data.items);
        //         this.props.setTotalCountUsers(response.data.totalCount);
        //     })
    }

    //отправка get запроса при нажатии на цифры в span
    onPageChange = (page) => {
        this.props.setIsLoading(true);
        this.props.setCurrentPage(page)
        getUsers(page, this.props.countUsersPage)
            .then(data => {
                this.props.setIsLoading(false);
                this.props.setUsers(data.items);
            })
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
        setUsers,
        setTotalCountUsers,
        setCurrentPage,
        setIsLoading,
        setButtonDisabling
    })(UsersAJAX)

export default UsersContainer;