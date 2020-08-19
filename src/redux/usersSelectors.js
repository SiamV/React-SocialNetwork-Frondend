export const getUsers = (state) => {
    return state.usersPage.users
}

export const getCountUsersPage = (state) => {
    return state.usersPage.countUsersPage
}

export const getTotalCountUsers = (state) => {
    return state.usersPage.totalCountUsers
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getIsLoading = (state) => {
    return state.usersPage.isLoading
}

export const getIsButtonDisabling = (state) => {
    return state.usersPage.isButtonDisabling
}