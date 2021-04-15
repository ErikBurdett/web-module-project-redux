import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";

import {carSalesReducer} from "./reducers/carSalesReducer";

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(reducer);
const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider>
    <App />
    </Provider>
    , rootElement);