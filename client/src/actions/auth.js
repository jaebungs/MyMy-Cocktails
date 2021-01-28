export const logIn = ({token, result}) => ({
    type: 'LOG_IN',
    token,
    result
})

export const logOut = () => ({
    type: 'LOG_OUT'
})