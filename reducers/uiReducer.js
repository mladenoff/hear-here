import { otSessionConstants } from '../actions/otSessionActions';
import { merge } from 'lodash';
import { combineReducers } from 'redux';
import otSession from './otSessionReducer';

const initialState = {
  displayVideo: false
};

const display = (state = initialState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch(action.type) {
    case otSessionConstants.RECEIVE_OT_SESSION:
    case otSessionConstants.RECEIVE_OT_SESSION_TOKEN:
      newState.displayVideo = true;
      return newState;
    default:
      return state;
  }
};

export default combineReducers({
  display,
  otSession
});
