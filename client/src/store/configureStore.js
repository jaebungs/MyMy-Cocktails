import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import myBarReducer from "../reducers/myBar";
import authReducer from '../reducers/auth';
import cocktailsReducers from '../reducers/cocktails';
import filtersReducer from '../reducers/filters';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

export default () => {
  const store = createStore(
    combineReducers({
      cocktails: cocktailsReducers,
      myBar: myBarReducer,
      auth: authReducer,
      filters: filtersReducer
    }),
    composeWithDevTools(
      applyMiddleware(thunk)
    )
  );
  return store;
};
