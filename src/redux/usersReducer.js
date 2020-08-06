//state
import {followUser, getUsers, unfollowUser} from "../api/api";

let stateDefault = {
    users: [
        //создали часть объектов через dispatch(setUsersAC(users)) и перенесли пока в сам файл Users.js
        // {id:1, followed: false, fullName: 'Elena Maslova', location: {city: 'Moscow', country: 'Russia'}},
        // {id:2, followed: false, fullName: 'Denis Krasnov', location: {city: 'Ramenskoe', country: 'Russia'}},
        // {id:3, followed: true, fullName: 'Evgenia Vasileva', location: {city: 'Kaliningrad', country: 'Russia'}},
    ],
    countUsersPage: 7,
    totalCountUsers: 0,
    currentPage: 2,
    isLoading: false,
    isButtonDisabling: false
}

const usersReducer = (state = stateDefault, action) => {
    switch (action.type) {
        //логика если надо поменять часть в объекте, а не добавить
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }

        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }

        case SET_USERS: {
            let stateCopy = {
                ...state,
                users: action.users
            }
            return stateCopy;
        }
        case SET_TOTAL_COUNT_USERS: {
            let stateCopy = {
                ...state,
                totalCountUsers: action.totalUsers / 50
            }
            return stateCopy;
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.pageNumber
            }
        }
        case SWITCH_LOADING: {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        case IS_BUTTON_DISAIBLING: {
            return {
                ...state,
                isButtonDisabling: action.isDisabling
            }
        }
        default:
            return state;
    }

}

//constants

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_COUNT_USERS = 'SET_TOTAL_COUNT_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SWITCH_LOADING = 'SWITCH_LOADING';
const IS_BUTTON_DISAIBLING = 'IS_BUTTON_DISAIBLING';

//ActionCreators

export const follow = (userId) => ({
    type: FOLLOW,
    userId: userId
})
export const unfollow = (userId) => ({
    type: UNFOLLOW,
    userId: userId
})
export const setUsers = (users) => ({
    type: SET_USERS,
    users: users
})
export const setTotalCountUsers = (totalUsers) => ({
    type: SET_TOTAL_COUNT_USERS,
    totalUsers: totalUsers
})
export const setCurrentPage = (pageNumber) => ({
    type: SET_CURRENT_PAGE,
    pageNumber: pageNumber
})

export const setIsLoading = (isLoading) => ({
    type: SWITCH_LOADING,
    isLoading: isLoading
})

export const setButtonDisabling = (isDisabling) => (
    {
        type: IS_BUTTON_DISAIBLING,
        isDisabling: isDisabling
    }
)

//ThunksCreators

export const getUsersThunk = (currentPage, countUsersPage) => {
    return (
        (dispatch) => {
            //page - текущая страница, count - число пользователей на страницу
            dispatch(setIsLoading(true));
            dispatch(setCurrentPage(currentPage)); //только для onPageChange = (page) чтобы менялось подсветка
            getUsers(currentPage, countUsersPage)
                .then(data => {
                    dispatch(setIsLoading(false));
                    dispatch(setUsers(data.items));
                    dispatch(setTotalCountUsers(data.totalCount));
                })
        }
    )
}

export const unfollowThunkCreator = (userId) => {
    return (
        (dispatch) => {
            dispatch(setButtonDisabling(true));
            unfollowUser(userId)
                .then(data => {
                    if(data.resultCode === 0) {
                        dispatch(unfollow(userId))
                        dispatch(setButtonDisabling(false));
                    }
                })
        }
    )
}

export const followThunkCreator = (userId) => {
    return (
        (dispatch) => {
            dispatch(setButtonDisabling(true));
            followUser(userId)
                .then(data => {
                    if (data.resultCode === 0) {
                        dispatch(follow(userId));
                        dispatch(setButtonDisabling(false));
                    }
                })
        }
    )
}

export default usersReducer;