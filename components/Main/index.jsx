import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LiveSetlistIndexContainer from './LiveSetlistIndexContainer';
import UpcomingSetlistIndexContainer from './UpcomingSetlistIndexContainer';
import SetlistContainer from '../Setlist/SetlistContainer';
import SetlistFormContainer from '../SetlistForm/SetlistFormContainer';
import SignupFormContainer from '../Session/SignupFormContainer';
import LoginFormContainer from '../Session/LoginFormContainer';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import SearchResults from '../SearchResults/SearchResults';
import PublishPortal from '../Portal/PublishPortal';
import SubscribePortalContainer from '../Portal/SubscribePortalContainer';

const Main = () => (
  <div>
    <Switch>
      <ProtectedRoute path="/manage/create" component={SetlistFormContainer} />
      <Route path="/live" component={LiveSetlistIndexContainer} />
      <Route path="/upcoming" component={UpcomingSetlistIndexContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <Route path="/setlist/:setlistId" component={PublishPortal} />
      <Route path="/streams/:sessionId" component={SubscribePortalContainer} />
      <Route path="/search" component={SearchResults} />
    </Switch>
  </div>
);

export default Main;
