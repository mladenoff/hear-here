import React from 'react';
import ReactDOM from 'react-dom';
import { fetchSetlist } from './util/setlist_api_util';
import { fetchSongs } from './util/song_api_util';
import configureStore from './store';
import Root from './components/Root';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.dispatch = store.dispatch;
  window.fetchSetlist = fetchSetlist;
  window.fetchSongs = fetchSongs;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
