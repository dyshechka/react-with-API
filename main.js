import 'bootstrap/scss/bootstrap.scss';
import 'font-awesome/scss/font-awesome.scss';
require("./_custom.scss");

import React from 'react';
import AppWrapper from './src/containers/AppWrapper';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './src/reducers';

const store = createStore(reducer);

ReactDOM.render(
    (
        <Provider store={store}>
            <AppWrapper/>
        </Provider>
    ), document.getElementById('app'));