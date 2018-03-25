import { otSessionConstants } from '../actions/otSessionActions';
import { UPDATE_ACTIVE_SONG } from '../actions/songActions';
import { merge } from 'lodash';
import { combineReducers } from 'redux';
import otSession from './otSessionReducer';

const initialState = {
  displayVideo: false,
  activeSongId: null,
  archiveId: null
};

const display = (state = initialState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch(action.type) {
    case otSessionConstants.RECEIVE_OT_SESSION:
    case otSessionConstants.RECEIVE_OT_SESSION_TOKEN:
      newState.displayVideo = true;
      return newState;
    case UPDATE_ACTIVE_SONG:
      newState.activeSongId = action.songId;
      return newState;
    default:
      return state;
  }
};

export default combineReducers({
  display,
  otSession
});
