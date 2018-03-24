import { combineReducers } from 'redux';
import songs from './songsReducer';
import bands from './bandsReducer';
import setlists from './setlistsReducer';

<<<<<<< HEAD
import songs from './songsReducer';
import bands from './bandsReducer';
import session from './sessionReducer';
import setlists from './setlistsReducer';

export default combineReducers({
  bands,
  session,
  setlists,
  songs,
=======
export default combineReducers({
  songs,
  bands,
  setlists,
>>>>>>> Begin implementing top-level reducers
});
