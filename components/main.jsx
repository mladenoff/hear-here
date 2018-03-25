import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '../store/index';
import Root from './Root';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
  );
});
