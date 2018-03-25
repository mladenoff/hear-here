import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LiveSetlistIndexContainer from './LiveSetlistIndexContainer';
import UpcomingSetlistIndexContainer from './UpcomingSetlistIndexContainer';
import SetlistContainer from '../Setlist/SetlistContainer';

// class Main extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
const Main = () => (
  <div>
   HELLO WORLD
    <Switch>
      <Route path="/live" component={LiveSetlistIndexContainer} />
      <Route path="/upcoming" component={UpcomingSetlistIndexContainer} />
      <Route path="/setlist/:id" component={SetlistContainer} />
    </Switch>
  </div>
);
//   }
// }

export default Main;
