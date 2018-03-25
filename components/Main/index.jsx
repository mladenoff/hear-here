import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LiveSetlistIndexContainer from './LiveSetlistIndexContainer';
import UpcomingSetlistIndexContainer from './UpcomingSetlistIndexContainer';
import SetlistContainer from '../Setlist/SetlistContainer';
import SetlistFormContainer from '../SetlistForm/SetlistFormContainer';
import SignupFormContainer from '../Session/SignupFormContainer';
import LoginFormContainer from '../Session/LoginFormContainer';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
<<<<<<< HEAD
// import SearchResultsContainer from '../SearchResults/SearchResultsContainer';
import StreamPortal from '../Portal/StreamPortal';
=======
import SearchResultsContainer from '../SearchResults/SearchResultsContainer';
import PublishPortal from '../Portal/PublishPortal';
<<<<<<< HEAD
import SubscribePortal from '../Portal/SubscribePortal';
>>>>>>> Setup subscribe portal
=======
import SubscribePortalContainer from '../Portal/SubscribePortalContainer';
>>>>>>> Add stream path

const Main = () => (
  <div>
    <Switch>
      <ProtectedRoute path="/manage/create" component={SetlistFormContainer} />
      <Route path="/live" component={LiveSetlistIndexContainer} />
      <Route path="/upcoming" component={UpcomingSetlistIndexContainer} />
<<<<<<< HEAD
      {/* <Route path="/setlist/:id" component={SetlistContainer} /> */}
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      {/* <Route path="/search/" component={SearchResultsContainer} /> */}
      <Route path="/setlist/:setlistId" component={StreamPortal} />
      {/* <Redirect to='/live' /> */}
=======
      <Route path="/login" component={LoginFormContainer} />
      <Route path="/signup" component={SignupFormContainer} />
      <Route path="/search/" component={SearchResultsContainer} />
      <Route path="/setlist/:setlistId" component={PublishPortal} />
      <Route path="/streams/:sessionId" component={SubscribePortalContainer} />
      <Redirect to='/live' />
>>>>>>> Setup subscribe portal
    </Switch>
  </div>
);

export default Main;
