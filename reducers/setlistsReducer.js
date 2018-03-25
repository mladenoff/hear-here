import _ from 'lodash';
import {
  SET_AS_PLAYING,
  SET_NOT_PLAYING,
  RECEIVE_SETLISTS,
} from '../actions/setlistActions';

const setlistsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_SETLISTS:
      newState = {};
      action.setlists.map((setlist) => { newState[setlist.id] = setlist; });
      return Object.assign({}, state, newState);
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
