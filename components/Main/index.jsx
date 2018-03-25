import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LiveSetlistIndexContainer from './LiveSetlistIndexContainer';
import UpcomingSetlistIndexContainer from './UpcomingSetlistIndexContainer';
import SetlistContainer from './SetlistContainer';

// class Main extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
const Main = () => (
  <div>
   HELLO WORLD
    <Switch>
      <Route path="/live" comoponent={LiveSetlistIndexContainer} />
      <Route path="/upcoming" comoponent={UpcomingSetlistIndexContainer} />
      <Route path="/setlist/:id" Component={SetlistContainer} />
    </Switch>
  </div>
);
//   }
// }

export default Main;
