import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';

import rootReducer from '../reducers/root_reducer';

const middlewares = [
  thunk,
  createLogger(),
];

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(...middlewares)),
  )
);

export default configureStore;
