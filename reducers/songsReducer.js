import { merge } from 'lodash';
import {
  RECEIVE_SETLIST
} from '../actions/setlistActions';

const songsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_SETLIST:
      const songs = action.setlist.songs.map(song => newState[song.id] = song);
      return newState;
    default:
      return state;
  }
};

export default songsReducer;
