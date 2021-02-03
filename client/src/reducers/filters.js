const filtersDefault = {
    shakeInput: [""],
    homeByName: '',
    homeByLiquors: [],
    barByName: '',
    barByLiquors: []
}


const filtersReducer = (state=filtersDefault, action) => {

    switch (action.type){
        case 'SEARCH_HOME_BY_NAME':
            return {
                ...state,
                homeByName: action.text
            };

        case 'SEARCH_HOME_BY_LIQUOR':
            return {
                ...state,
                homeByLiquors: [...action.liquors]
            }
        case 'SEARCH_MY_BY_NAME':
            return {
                ...state,
                barByName: action.text
            };
        case 'SEARCH_MY_BY_LIQUOR':
            return {
                ...state,
                barByLiquors: [...action.liquors]
            }
        case 'SEARCH_BY_SHAKE_INPUT':
            return {
                ...state,
                shakeInput: [action.text]
            }
        default:
            return state;
    }
}

export default filtersReducer;