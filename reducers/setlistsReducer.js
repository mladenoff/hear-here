import { merge } from 'lodash';
import {
  START_FETCHING_SETLISTS,
  SET_AS_PLAYING,
  SET_NOT_PLAYING,
  RECEIVE_SETLISTS,
  RECEIVE_SETLIST,
} from '../actions/setlistActions';

const initialState = {
  entities: {},
  loading: false,
};

const setlistsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case START_FETCHING_SETLISTS:
      newState.loading = true;
      return newState;
    case RECEIVE_SETLISTS:
      action.setlists.map((setlist) => { newState[setlist.id] = setlist; });
      return newState;
    case RECEIVE_SETLIST:
      newState.entities[action.setlist.id] = action.setlist;
      newState.loading = false;
      return newState;
    case SET_AS_PLAYING:
      newState = { [action.setlistId]: { nowPlaying: true } };
      return _.merge({}, state, newState);
    case SET_NOT_PLAYING:
      newState = { [action.setlistId]: { nowPlaying: false } };
      return _.merge({}, state, newState);
    default:
      return state;
  }
};

export default setlistsReducer;
