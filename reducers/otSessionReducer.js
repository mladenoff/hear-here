import { otSessionConstants } from '../actions/otSessionActions';
import { merge } from 'lodash';

const initialState = {
  sessionId: null,
  sessionToken: null,
  errors: [],
  openTok: null,
};

const otSessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  let sessionToken, sessionId;

  switch(action.type) {
    case otSessionConstants.RECEIVE_OT_SESSION:
      sessionId = action.data.sessionId;
      sessionToken = action.data.generateToken();

      return merge(newState, { sessionId, sessionToken });
    case otSessionConstants.RECEIVE_OT_SESSION_TOKEN:
      sessionToken = action.token;
      return merge(newState, { sessionToken, });
    case otSessionConstants.RECEIVE_OT_SESSION_ERROR:
      newState.errors.push(action.error);
      return newState;
    default:
      return state;
  }
};

export default otSessionReducer;
