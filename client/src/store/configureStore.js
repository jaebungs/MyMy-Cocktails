import { createStore, combineReducers } from "redux";
import myBarReducer from "../reducers/myBar";
import authReducer from '../reducers/auth';

export default () => {
  const store = createStore(
    combineReducers({
      myBar: myBarReducer,
      auth: authReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
