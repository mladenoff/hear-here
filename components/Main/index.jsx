import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LiveSetlistIndexContainer from './LiveSetlistIndexContainer';
import UpcomingSetlistIndexContainer from './UpcomingSetlistIndexContainer';
import Setlist from './Setlist';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        HELLO WORLD
      <Switch>
          <Route path='/live' comoponent={LiveSetlistIndexContainer} />
          <Route path='/upcoming' comoponent={UpcomingSetlistIndexContainer} />
          <Route path='/setlist/:id' Component={Setlist} />
      </Switch>
      </div>
    );
  }
}

export default Main;
