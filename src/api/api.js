import * as axios from "axios";

const instance = axios.create(
    {
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true,
        headers: {'API-KEY': 'f5c4bbba-674e-4a1d-8c4e-f97b4c67964e'}
    }
)

export const getUsersFromServer = (currentPage, countUsersPage) => {
    return (
        instance.get(`users?page=${currentPage}&count=${countUsersPage}`
        )
            .then(response => {
                return response.data
            })
    )
}

export const getUsersStatus = (userId) => {
    return (
        instance.get(`profile/status/` + userId)
            .then(response => {
                return response.data
            })
    )
}

export const updateUsersStatus = (status) => {
    return (
        instance.put(`profile/status`, {status: status})
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

export const authMe = () => {
    return (
        instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    )
}

export const getUserProfile = (userId) => {
    return (
        instance.get(`profile/` + userId)
            .then(response => {
                return response.data
            })
    )
}

export const APIsavePhoto = (filePhoto) => {
    const formData = new FormData();
    formData.append('image', filePhoto)
    return (
        instance.put(`profile/photo`, formData, {
            headers: {'Content-Type': 'multipart/form-data'}
        })
    )
}

export const loginAPI = {
    loginPostAPI(email, password, rememberMe) {
        return (
            instance.post(`auth/login`, {email, password, rememberMe})
        )
    },
    logoutDeleteAPI() {
        return (
            instance.delete(`auth/login`)
        )
    }
}