import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

<<<<<<< HEAD
import Dashboard from './Dashboard/Dashboard';
import VideoFrameContainer from './VideoFrame/VideoFrameContainer';
=======
>>>>>>> Create Main componenet
import Nav from './nav/Nav';
import Main from './Main';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
<<<<<<< HEAD
      <div>
        <Dashboard />
        <VideoFrameContainer />
        <Nav />
      </div>
=======
      <Nav />
      <Main />
>>>>>>> Create Main componenet
    </HashRouter>
  </Provider>
);

export default Root;
