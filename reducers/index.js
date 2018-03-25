import { combineReducers } from 'redux';

import songs from './songsReducer';
import bands from './bandsReducer';
import session from './sessionReducer';
import setlists from './setlistsReducer';
import ui from './uiReducer';
import search from './searchReducer';

export default combineReducers({
  bands,
  session,
  setlists,
  songs,
  ui,
  search
});
