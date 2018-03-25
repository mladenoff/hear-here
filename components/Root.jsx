import React from 'react';
import { Provider } from 'react-redux';
import VideoPlayer from './VideoPlayer/VideoPlayerContainer';

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <VideoPlayer />
    </div>
  </Provider>
);

export default Root;
