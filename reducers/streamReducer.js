import { merge } from 'lodash';
import {
  RECEIVE_ACTIVE_STREAMS
} from '../actions/activeStreamActions';

const streamReducer = (state = [], action) => {
  Object.freeze(state);


  switch (action.type) {
    case RECEIVE_ACTIVE_STREAMS:
      return action.streams;
    default:
      return state;
  }
};

export default streamReducer;
