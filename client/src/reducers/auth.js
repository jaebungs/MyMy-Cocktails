const authDefault = {token: null, result: null};

const authReducer = (state=authDefault, action) => {
    switch (action.type){
        case 'AUTH_LOG_IN':
            localStorage.setItem('user', JSON.stringify({token: action?.token, result: action?.result}));
            return {...state, token: action?.token, result: action?.result};

        case 'LOG_OUT':
            localStorage.removeItem('user');
            return state = authDefault;

        case 'SIGN':
            localStorage.setItem('user', JSON.stringify({ ...action?.data }));
            return {...state, authData: action?.data};

        default:
        return state;
    }
}

export default authReducer;