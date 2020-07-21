let stateDefault = {
    users: [
        {id:1, followed: false, fullName: 'Elena Maslova', location: {city: 'Moscow', country: 'Russia'}},
        {id:2, followed: false, fullName: 'Denis Krasnov', location: {city: 'Ramenskoe', country: 'Russia'}},
        {id:3, followed: true, fullName: 'Evgenia Vasileva', location: {city: 'Kaliningrad', country: 'Russia'}},
    ]
}

const usersReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case FOLLOW: {
            let stateCopy = {...state,
                users: [...state.users]
            }
            if (stateCopy.users.id === action.userId) {
                stateCopy.users.followed = true;
            }
            return stateCopy;
        }
        case UNFOLLOW: {
            let stateCopy = {...state,
                users: [...state.users]
            }
            if (stateCopy.users.id === action.userId) {
                stateCopy.users.followed = false;
            }
            return stateCopy;
        }
        case SET_USERS: {
            let stateCopy = {...state,
                users: [...state.users, ...action.users]
            }
            return stateCopy;
        }
        default:
            return state;
    }

}

export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET_USERS';

const followAC = (userId) => ({
    type: FOLLOW,
    userId: userId
})
const unfollowAC = (userId) => ({
    type: UNFOLLOW,
    userId: userId
})
const setUsersAC = (users) => ({
    type: SET_USERS,
    users: users
})

export default usersReducer;