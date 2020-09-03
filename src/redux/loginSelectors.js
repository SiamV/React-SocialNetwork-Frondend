export  const getId = (state) => {
    return state.login.id
}
export  const getLogin = (state) => {
    return state.login.login
}
export  const getEmail= (state) => {
    return state.login.email
}
export  const getIsLoginSelector = (state) => {
    return state.login.isLogin
}

export  const getCaptchaUrlSelector = (state) => {
    return state.login.captchaUrl
}