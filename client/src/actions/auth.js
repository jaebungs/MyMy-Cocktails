export const logOut = () => ({
    type: 'LOG_OUT'
})

export const signIn = (formData, history) => async (dispatch) => {
    await fetch('https://mymycocktails-backend876.herokuapp.com/user/signin', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(formData)
    })
    .then((res) => res.json())
    .then((data) => {
        if (!data.message){
            dispatch({type: 'GET_ALL_FROM_MY_BAR', cocktails: data?.result?.bar}); // myBar reducer
            history.push('/'); // if login success, move to direct to home
        }
        dispatch({type: 'LOG_IN', data}); // auth reducer
        
    })
    .catch(err=> console.log(err))
}

export const signUp = (formData, history) => async (dispatch) => {
    await fetch('https://mymycocktails-backend876.herokuapp.com/user/signup', {
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