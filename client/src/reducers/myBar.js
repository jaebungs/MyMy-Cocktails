const myBarDefault = [];

const myBarReducer = (state = myBarDefault, action) => {
  switch (action.type) {
    case 'GET_ALL_FROM_MY_BAR':
      return [...action?.cocktails];

    case 'ADD_TO_MY_BAR':
      let newLocalStorate = {...JSON.parse(localStorage?.getItem('user')), result: {...action?.newData} };
      
      localStorage.setItem('user', JSON.stringify(newLocalStorate));
      console.log(action?.newData)
      return [...action?.newData?.bar];

    case 'REMOVE_FROM_MY_BAR':
      return [...state];
    default:
      return state;
  }
};

export default myBarReducer;
