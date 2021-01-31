const myBarDefault = [];

const myBarReducer = (state = myBarDefault, action) => {
  switch (action.type) {
    case 'GET_ALL_MY_COCKTAILS':
      return [...state];

    case 'ADD_TO_MY_COCKTAILS':
      return [...state, ...action.data];

    case 'REMOVE_FROM_MY_COCKTAILS':
      return [...state];
    default:
      return state;
  }
};

export default myBarReducer;
