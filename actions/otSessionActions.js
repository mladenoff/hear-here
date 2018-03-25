import * as openTokUtil from '../util/openTokUtil';
import { displayVideo } from './uiActions';

export const otSessionConstants = {
  RECEIVE_OT_SESSION: 'RECEIVE_OT_SESSION',
  RECEIVE_OT_SESSION_ERROR: 'RECEIVE_OT_SESSION_ERROR',
};

export const receiveOTSession = data => ({
  type: otSessionConstants.RECEIVE_OT_SESSION, data
});

export const receiveOTSessionError = error => ({
  type: otSessionConstants.RECEIVE_OT_SESSION_ERROR, error
});

export const createOTSession = () => dispatch => {
  return openTokUtil.createSession().then(({ sessionId }) => {
    dispatch(receiveOTSession(sessionId));
    dispatch(displayVideo());
  }, (err) => {
    dispatch(receiveOTSessionError(err));
  });
};
