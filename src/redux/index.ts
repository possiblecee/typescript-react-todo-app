import { createStore, combineReducers } from 'redux';
import todos from './Todos';

export default createStore(combineReducers({ todos }));