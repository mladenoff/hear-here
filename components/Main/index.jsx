import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LiveSetlistIndexContainer from './LiveSetlistIndexContainer';
import UpcomingSetlistIndexContainer from './UpcomingSetlistIndexContainer';
import SetlistContainer from '../Setlist/SetlistContainer';
import SignupFormContainer from '../SessionForm/SignupFormContainer';
import LoginFormContainer from '../SessionForm/LoginFormContainer';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import SearchResultsContainer from '../SearchResults/SearchResultsContainer';

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
      <Route path="/login" component={LoginFormContainer} />
      <Route path="/signup" component={SignupFormContainer} />
      <Route path="/search/" component={SearchResultsContainer} />
    </Switch>
  </div>
);
//   }
// }

export default Main;
