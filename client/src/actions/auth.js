export const logInSuccess = ({token, result}) => ({
    type: 'LOG_IN_SUCCESS',
    token,
    result
})

export const logOut = () => ({
    type: 'LOG_OUT'
})