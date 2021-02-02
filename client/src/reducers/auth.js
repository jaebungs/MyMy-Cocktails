const getFromLocalStorage = JSON.parse(localStorage?.getItem('user'));
const authDefault = {token: getFromLocalStorage?.token, result: getFromLocalStorage?.result};

const authReducer = (state=authDefault, action) => {
    switch (action.type){
        case 'AUTH_LOG_IN':
            localStorage.setItem('user', JSON.stringify({token: action?.token, result: action?.result}));
            return {...state, token: action?.token, result: action?.result};

        case 'LOG_OUT':
            localStorage.removeItem('user');
            return state = authDefault;

        case 'LOG_IN':
            const upperCaseFirstName = action?.data.result?.firstName.charAt(0) + action?.data.result?.firstName.slice(1);
            const upperCaseLastName = action?.data.result?.lastName.charAt(0) + action?.data.result?.lastName.slice(1);
            const name = `${upperCaseFirstName} ${upperCaseLastName}`;

            localStorage.setItem('user', JSON.stringify({ ...action?.data }));
            return { ...state, ...action?.data};
        case 'ERROR':
            return {token: action?.token, result: action?.result, message: action?.message};
        default:
        return state;
    }
}

export default authReducer;