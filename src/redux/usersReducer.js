let stateDefault = {
    users: [
        {id:1, followed: false, fullName: 'Elena Maslova', location: {city: 'Moscow', country: 'Russia'}},
        {id:2, followed: false, fullName: 'Denis Krasnov', location: {city: 'Ramenskoe', country: 'Russia'}},
        {id:3, followed: true, fullName: 'Evgenia Vasileva', location: {city: 'Kaliningrad', country: 'Russia'}},
    ]
}

const usersReducer = (state = stateDefault, action) => {
    switch (action.type) {
        //логика если надо поменять часть в объекте, а не добавить
        case FOLLOW: {
            return  {...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }

        case UNFOLLOW: {
            return {...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
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

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

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

export default usersReducer;