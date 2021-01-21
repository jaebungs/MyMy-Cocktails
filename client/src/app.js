import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouters from './routers/AppRouters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const jsx = (

        <AppRouters />

)

ReactDOM.render(jsx, document.getElementById('app'));