import { combineReducers } from 'redux';
import otSession from './otSessionReducer';
import ui from './uiReducer';

export default combineReducers({
  otSession,
  ui,
});
