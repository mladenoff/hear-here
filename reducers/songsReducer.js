import { merge } from 'lodash';
import {
  RECEIVE_SETLIST
} from '../actions/setlistActions';

const songsReducer = (state = {}, action) => {
  Object.freeze(state);

  const newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_SETLIST:
      const newSongs = action.setlist.songs || [];
      const songs = newSongs.map(song => newState[song.id] = song);
      return newState;
    default:
      return state;
  }
};

export default songsReducer;
