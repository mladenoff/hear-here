import { RECEIVE_BANDS, RECEIVE_BAND } from '../actions/bandActions';

const bandsReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BANDS:
      newState = {};
      action.bands.map((band) => { newState[band.id] = band; });
      return Object.assign({}, state, newState);
    case RECEIVE_BAND:
      newState = { [action.band.id]: action.band };
      return Object.assign({}, state, newState);
    default:
      return state;
  }
};

export default bandsReducer;
