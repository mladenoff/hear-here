import { RECEIVE_USER } from "../actions/sessionActions";

const sessionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
    default:
      return state;
  }
};

export default sessionReducer;
