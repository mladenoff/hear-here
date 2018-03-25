import React from 'react';
import { Provider } from 'react-redux';
import Dashboard from './Dashboard/Dashboard';
import VideoFrameContainer from './VideoFrame/VideoFrameContainer';

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Dashboard />
      <VideoFrameContainer />
    </div>
  </Provider>
);

export default Root;
