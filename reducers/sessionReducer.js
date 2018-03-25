import { otSessionConstants } from '../actions/otSessionActions';
import { merge } from 'lodash';

const initialState = {
  session: {},
  errors: []
};

const sessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch(action.type) {
    case otSessionConstants.RECEIVE_OT_SESSION:
      return merge(newState, action.session);
    case otSessionConstants.RECEIVE_OT_SESSION_ERROR:
      newState.errors.push(action.error);
      return newState;
    default:
      return state;
  }
};

export default sessionReducer
