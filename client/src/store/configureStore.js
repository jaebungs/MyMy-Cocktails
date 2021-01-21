import { createStore, combineReducers } from "redux";
import myBarReducer from "../reducers/myBar";

export default () => {
  const store = createStore(
    combineReducers({
      myBar: myBarReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
