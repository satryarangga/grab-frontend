/* eslint react/prop-types: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Routes from './routes';
import promise from 'redux-promise';
import './styles/styles.scss';
import './styles/day-picker.css';
import reducers from './reducers/';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
      <Routes />
     </Provider>
    , document.getElementById('app')
);