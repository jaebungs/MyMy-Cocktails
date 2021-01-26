import { createStore, combineReducers } from "redux";
import myBarReducer from "../reducers/myBar";
import authReducer from '../reducers/auth';
import cocktailsReducers from '../reducers/cocktails';
import filtersReducer from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      cocktails: cocktailsReducers,
      myBar: myBarReducer,
      auth: authReducer,
      filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
