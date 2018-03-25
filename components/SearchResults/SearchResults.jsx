import React from 'react';
import { Route } from 'react-router-dom';
import BandResultsContainer from './BandResultsContainer';
import SetlistResultsContainer from './SetlistResultsContainer';
import SongResultsContainer from './SongResultsContainer';

export default () => ([
  <Route path="/search/bands" component={BandResultsContainer} />,
  <Route path="/search/setlists" component={SetlistResultsContainer} />,
  <Route path="/search/songs" component={SongResultsContainer} />,
]);