export const authLogIn = ({token, result}) => ({
    type: 'AUTH_LOG_IN',
    token,
    result
})

export const logOut = () => ({
    type: 'LOG_OUT'
})

export const signIn = (formData, history) => async (dispatch) => {
    await fetch('http://localhost:5000/user/signin', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(formData)
    })
    .then((res) => res.json())
    .then((data) => {
        dispatch({type: 'LOG_IN', data});
        if (!data.message){
            history.push('/');
        }
    })
    .catch(err=> console.log(err))
}

export const signUp = (formData, history) => async (dispatch) => {
    await fetch('http://localhost:5000/user/signup', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(formData)
    })
    .then((res) => res.json())
    .then((data) => {
        dispatch({type: 'LOG_IN', data});
        if (!data.message){
            history.push('/');
        }
    })
    .catch(err=> console.log(err))
}