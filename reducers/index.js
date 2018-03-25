import { combineReducers } from 'redux';

import songs from './songsReducer';
import bands from './bandsReducer';
import session from './sessionReducer';
import setlists from './setlistsReducer';
import otSession from './otSessionReducer';
import ui from './uiReducer';

export default combineReducers({
  bands,
  session,
  setlists,
  songs,
  otSession,
  ui,
});
