import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useDispatch } from 'react-redux';
import AppRouters from './routers/AppRouters';
import { storeAllCocktails } from './actions/cocktails';
import configureStore from './store/configureStore';
import { CssBaseline } from '@material-ui/core';
  
const store = configureStore();

// initial data for main cocktail page.
fetch('http://localhost:5000/cocktails')
    .then((res) => res.json())
    .then((data) => {
        store.dispatch(storeAllCocktails(data));
    })
    .catch((err) => console.log('fetch error', err));

const jsx = (
    <Provider store={store}>
        <CssBaseline />
        <AppRouters />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));