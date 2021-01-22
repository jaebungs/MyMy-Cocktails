const myBarDefault = [];

const myBarReducer = (state = myBarDefault, action) => {
  switch (action.type) {
    case 'ADD_TO_MY_BAR':
      return [...state];
    case 'GET_ALL_COCKTAILS':
      return [...state];
    default:
      return state;
  }
};

export default myBarReducer;
