import {createStore} from 'redux';
import { reducer } from '../actions-reducers';

export default function configureStore(initialState, middleware) {
  return createStore(reducer, initialState, middleware);
}
