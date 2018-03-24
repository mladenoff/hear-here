import { combineReducers } from 'redux';
import songs from './songsReducer';
import bands from './bandsReducer';
import setlists from './setlistsReducer';

export default combineReducers({
  songs,
  bands,
  setlists,
});
