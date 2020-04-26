import { createStore, applyMiddleware, compose } from 'redux';
import combineReducers from './combineReducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers, composeEnhancers());

export default store;
