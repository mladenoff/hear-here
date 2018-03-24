import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import Nav from './nav/Nav';
import Main from './Main';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Nav />
      <Main />
    </HashRouter>
  </Provider>
);

export default Root;
