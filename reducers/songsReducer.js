import { merge } from 'lodash';
import {
  RECEIVE_SETLIST
} from '../actions/setlistActions';
import {
  RECEIVE_SONGS
} from '../actions/songActions';

const songsReducer = (state = {}, action) => {
  Object.freeze(state);

  const newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_SONGS:
      action.songs.map(song => newState[song.id] = song);
      return newState;
    case RECEIVE_SETLIST:
      const newSongs = action.setlist.songs || [];
      const songs = newSongs.map(song => newState[song.id] = song);
      return newState;
    default:
      return state;
  }
};

export default songsReducer;
