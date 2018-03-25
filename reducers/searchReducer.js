import { RECEIVE_SEARCH_RESULTS } from '../actions/searchActions';
const EMPTY_STATE = { bands: {}, setlists: {}, songs: {} };
const RESULT_ORDER =  Object.keys(EMPTY_STATE);

const searchReducer = (state = EMPTY_STATE, action) => {
  switch(action.type){
    case RECEIVE_SEARCH_RESULTS:
    const newState = {};
    
    action.results.forEach((el, idx) => {
      if(el.length){
        const items = {};
        el.forEach((item) => { items[item.id] = item; });
        newState[RESULT_ORDER[idx]] = items;
      } else {
        newState[RESULT_ORDER[idx]] = {} ;
      }
    });
    return Object.keys(newState).length > 0 ? newState : EMPTY_STATE;
    default:
    return state;
  }
};

export default searchReducer;