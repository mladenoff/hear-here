import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import Nav from './Nav/Nav';
import Main from './Main';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <div>
        <Nav />
        <Main />
      </div>
    </HashRouter>
  </Provider>
);

export default Root;
