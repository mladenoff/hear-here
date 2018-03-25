import { RECEIVE_USER } from "../actions/sessionActions";

const sessionReducer = (state = { currentUser: null }, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      const currentUser = action.currentUser;
      return Object.assign({}, { currentUser });
    default:
      return state;
  }
};

export default sessionReducer;
