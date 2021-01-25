const myBarDefault = [];

const myBarReducer = (state = myBarDefault, action) => {
  switch (action.type) {
    case 'ADD_TO_MY_BAR':
      return [...state];
    default:
      return state;
  }
};

export default myBarReducer;
