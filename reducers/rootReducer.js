import { combineReducers } from 'redux';
import session from './sessionReducer';
import ui from './uiReducer';

export default combineReducers({
  session,
  ui,
});
