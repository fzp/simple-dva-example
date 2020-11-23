import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import SimpleDVA from 'simple-dva'
import appModel from './model/app'
import createSagaMiddleware from 'redux-saga'

const [reducers, saga] = new SimpleDVA().parseModels([appModel]);

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  combineReducers(reducers),
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(saga)

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);