import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import BackButton from '../shared/BackButton';

export default () => (
  <div className="upper-left-nav-container">
    <Switch>
      <Route
        path="/search"
        component={BackButton} />
      <Link to="/live" >
        <img
          className="logo"
          src="./assets/music.png"
          alt="music logo" />
      </Link>
    </Switch>
  </div>
);
