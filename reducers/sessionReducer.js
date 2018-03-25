import { otSessionConstants } from '../actions/otSessionActions';
import { merge } from 'lodash';

const initialState = {
  sessionId: null,
  sessionToken: null,
  errors: [],
};

const sessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch(action.type) {
    case otSessionConstants.RECEIVE_OT_SESSION:
      const sessionId = action.data.sessionId;
      const sessionToken = action.data.generateToken();
      return merge(newState, { sessionId, sessionToken });
    case otSessionConstants.RECEIVE_OT_SESSION_ERROR:
      newState.errors.push(action.error);
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
