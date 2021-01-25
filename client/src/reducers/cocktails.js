const cocktailsDefault = [];

const cocktailsReducers = (state=cocktailsDefault, action) => {
    switch (action.type){
        case 'STORE_ALL_COCKTAILS':
            return [...state, ...action.cocktails];
        default:
            return state;
    }
}

export default cocktailsReducers;