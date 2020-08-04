import * as axios from "axios";

const instance = axios.create(
    {
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true,
        headers: {'API-KEY': 'f5c4bbba-674e-4a1d-8c4e-f97b4c67964e'}
    }
)

export const getUsers = (currentPage, countUsersPage) => {
    return (
        instance.get(`users?page=${currentPage}&count=${countUsersPage}`
        )
            .then(response => {
                return response.data
            })
    )
}

export const followUser = (id) => {
    return (
        instance.post(`follow/${id}`, {})
            .then(response => {
                return response.data
            })
    )
}

export const unfollowUser = (id) => {
    return (
        instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    )
}