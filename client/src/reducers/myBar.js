const myBarDefault = [];

const myBarReducer = (state = myBarDefault, action) => {
  let newLocalStorate;

  switch (action.type) {
    case 'GET_ALL_FROM_MY_BAR':
      return [...action?.cocktails];

    case 'ADD_TO_MY_BAR':
    newLocalStorate = {...JSON.parse(localStorage?.getItem('user')), result: {...action?.newData} };
      
      localStorage.setItem('user', JSON.stringify(newLocalStorate));
      return [...action?.newData?.bar];

    case 'REMOVE_FROM_MY_BAR':
      newLocalStorate = {...JSON.parse(localStorage?.getItem('user')), result: {...action?.newData} };
      
      localStorage.setItem('user', JSON.stringify(newLocalStorate));
      return [...action?.newData?.bar];
    default:
      return state;
  }
};

export default myBarReducer;
