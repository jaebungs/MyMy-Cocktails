const authDefault = {token: null, result: null};

const authReducer = (state=authDefault, action) => {
    switch (action.type){
        case 'AUTH_LOG_IN':
            localStorage.setItem('user', JSON.stringify({token: action?.token, result: action?.result}));
            return {...state, token: action?.token, result: action?.result};

        case 'LOG_OUT':
            localStorage.removeItem('user');
            return state = authDefault;

        case 'LOG_IN':
            localStorage.setItem('user', JSON.stringify({ ...action?.data }));
            return { ...state, ...action?.data};
        case 'ERROR':
            return {token: action?.token, result: action?.result, message: action?.message};
        default:
        return state;
    }
}

export default authReducer;