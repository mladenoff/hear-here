import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const middlewares = [
  thunk,
  createLogger(),
];

const configureStore = (preloadedState = {}) => {
  const composedMiddlewares = composeWithDevTools(applyMiddleware(...middlewares));

  return createStore(
    rootReducer,
    preloadedState,
    composedMiddlewares
  );
};

export default configureStore;
