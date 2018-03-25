import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LiveSetlistIndexContainer from './LiveSetlistIndexContainer';
import UpcomingSetlistIndexContainer from './UpcomingSetlistIndexContainer';
import SetlistContainer from '../Setlist/SetlistContainer';
import SignupFormContainer from '../Session/SignupFormContainer';
import LoginFormContainer from '../Session/LoginFormContainer';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
// import SearchResultsContainer from '../SearchResults/SearchResultsContainer';
import StreamPortal from '../Portal/StreamPortal';
import SetlistForm from '../Dashboard/SetlistForm';

const Main = () => (
  <div>
    <SetlistForm />
    <Switch>
      <Route path="/live" component={LiveSetlistIndexContainer} />
      <Route path="/upcoming" component={UpcomingSetlistIndexContainer} />
      {/* <Route path="/setlist/:id" component={SetlistContainer} /> */}
      <Route path="/login" component={LoginFormContainer} />
      <Route path="/signup" component={SignupFormContainer} />
      {/* <Route path="/search/" component={SearchResultsContainer} /> */}
      <Route path="/setlist/:setlistId" component={StreamPortal} />
      {/* <Redirect to='/live' /> */}
    </Switch>
  </div>
);

export default Main;
