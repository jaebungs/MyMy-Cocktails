const authDefault = {token: null, result: null};

const authReducer = (state=authDefault, action) => {
    switch (action.type){
        case 'LOG_IN_SUCCESS':
            console.log(action?.data)
            return {...state, token: action?.token, result: action?.result};

        case 'LOG_OUT':
            return state;

        default:
        return state;
    }
}

export default authReducer;