// This file merely configures the store for hot reloading.
// This boilerplate file is likely to be the same for each project that uses Redux.
// With Redux, the actual stores are in /reducers.

import {createStore, compose, applyMiddleware} from 'redux';
import { reducer } from '../actions-reducers';
import { promiseResolver } from '../middleware/promiseResolver';

let win = {};

if (typeof window !== 'undefined') win = window;

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, compose(
    // Add other middleware on this line...
    applyMiddleware(promiseResolver),
    win.devToolsExtension ? win.devToolsExtension() : f => f // add support for Redux dev tools
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../actions-reducers', () => {
      const nextReducer = require('../actions-reducers').reducer; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
