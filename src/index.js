import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { composeWithDevTools } from 'remote-redux-devtools';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(ReduxPromise))(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));