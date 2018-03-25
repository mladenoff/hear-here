import React from 'react';
import { Provider } from 'react-redux';
import Dashboard from './Dashboard/Dashboard';

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Dashboard />
    </div>
  </Provider>
);

export default Root;
