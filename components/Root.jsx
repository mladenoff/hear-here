import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import Dashboard from './Dashboard/Dashboard';
import VideoFrameContainer from './VideoFrame/VideoFrameContainer';
import Nav from './nav/Nav';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <div>
        <Dashboard />
        <VideoFrameContainer />
        <Nav />
      </div>
    </HashRouter>
  </Provider>
);

export default Root;
