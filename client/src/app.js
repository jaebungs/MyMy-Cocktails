import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouters from './routers/AppRouters';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';


const store = configureStore();
const jsx = (
    <Provider store={store}>
        <AppRouters />
    </Provider>

)

ReactDOM.render(jsx, document.getElementById('app'));