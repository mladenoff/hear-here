import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

// import Dashboard from './Dashboard/Dashboard';
import VideoFrameContainer from './VideoFrame/VideoFrameContainer';
import Nav from './Nav/Nav';
import Main from './Main/index';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <div>
        <Nav />
        <Main />
        {/*<Dashboard />*/}
        {/*<VideoFrameContainer />*/}
      </div>
    </HashRouter>
  </Provider>
);

export default Root;
