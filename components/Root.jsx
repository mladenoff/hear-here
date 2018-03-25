import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import Nav from './nav/Nav';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Nav />
    </HashRouter>
  </Provider>
);

export default Root;
