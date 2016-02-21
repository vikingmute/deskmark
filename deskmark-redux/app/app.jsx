import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './containers/app';
import rootReducer from './reducers';

const store = createStore(rootReducer);
const ele = document.createElement('div');
document.body.appendChild(ele);

render (
  <Provider store={store}>
    <App/>
  </Provider>,
  ele
)
