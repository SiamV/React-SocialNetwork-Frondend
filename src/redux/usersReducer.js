let stateDefault = {
    users: [
        //создали часть объектов через dispatch(setUsersAC(users)) и перенесли пока в сам файл Users.js
        // {id:1, followed: false, fullName: 'Elena Maslova', location: {city: 'Moscow', country: 'Russia'}},
        // {id:2, followed: false, fullName: 'Denis Krasnov', location: {city: 'Ramenskoe', country: 'Russia'}},
        // {id:3, followed: true, fullName: 'Evgenia Vasileva', location: {city: 'Kaliningrad', country: 'Russia'}},
    ],
    countUsersPage: 7,
    totalCountUsers: 0,
    currentPage: 2
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
                totalCountUsers: action.totalUsers/50
            }
            return stateCopy;
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.pageNumber
            }
        }
        default:
            return state;
    }

}

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_COUNT_USERS = 'SET_TOTAL_COUNT_USERS';
const SET_CURRENT_PAGE ='SET_CURRENT_PAGE';

export const followAC = (userId) => ({
    type: FOLLOW,
    userId: userId
})
export const unfollowAC = (userId) => ({
    type: UNFOLLOW,
    userId: userId
})
export const setUsersAC = (users) => ({
    type: SET_USERS,
    users: users
})
export const setTotalCountUsersAC = (totalUsers) => ({
    type: SET_TOTAL_COUNT_USERS,
    totalUsers: totalUsers
})
export const setCurrentPageAC =(pageNumber) => ({
    type: SET_CURRENT_PAGE,
    pageNumber: pageNumber
})

export default usersReducer;