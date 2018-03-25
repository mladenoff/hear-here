import { uiConstants } from '../actions/uiActions';
import { merge } from 'lodash';

const initialState = {
  displayVideo: false
};

const uiReducer = (state = initialState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch(action.type) {
    case uiConstants.DISPLAY_VIDEO:
      newState.displayVideo = true;
      return newState;
    default:
      return state;
  }
};

export default uiReducer;
