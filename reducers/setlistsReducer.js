import { SET_AS_PLAYING, SET_NOT_PLAYING } from '../actions/setlistActions';

const setlistsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case SET_AS_PLAYING:
      newState = { [action.setlistId]: { nowPlaying: true } };
      return Object.assign({}, state, newState);
    case SET_NOT_PLAYING:
      newState = { [action.setlistId]: { nowPlaying: false } };
      return Object.assign({}, state, newState);
    default:
      return state;
  }
};

export default setlistsReducer;
