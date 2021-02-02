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
        dispatch({type: 'LOG_IN', data}); // auth reducer
        dispatch({type: 'GET_ALL_FROM_MY_BAR', cocktails: data?.result?.bar}); // myBar reducer
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