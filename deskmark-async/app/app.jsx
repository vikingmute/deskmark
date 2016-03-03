import React from 'react';
import {render} from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import App from './containers/app';
import rootReducer from './reducers';

import 'bootstrap/scss/bootstrap.scss';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware // 允许我们 dispatch() 函数
)(createStore);

const store = createStoreWithMiddleware(rootReducer);
const ele = document.createElement('div');
document.body.appendChild(ele);
render (
  <Provider store={store}>
    <App/>
  </Provider>,
  ele
);
