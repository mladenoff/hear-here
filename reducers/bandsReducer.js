import { RECEIVE_BANDS } from '../actions/bandActions';

const bandsReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BANDS:
      newState = {};
      action.bands.map((band) => { newState[band.id] = band; });
      return Object.assign({}, state, newState);
    default:
      return state;
  }
};

export default bandsReducer;
