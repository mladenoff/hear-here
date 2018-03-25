import * as openTokUtil from '../util/openTokUtil';

export const otSessionConstants = {
  RECEIVE_OT_SESSION: 'RECEIVE_OT_SESSION',
  RECEIVE_OT_SESSION_ERROR: 'RECEIVE_OT_SESSION_ERROR',
};

export const receiveOTSession = data => ({
  type: RECEIVE_OT_SESSION, data
});

export const receiveOTSessionError = error => ({
  type: RECEIVE_OT_SESSION_ERROR, error
});

export const createOTSession = () => dispatch => {
  return openTokUtil.createSession().then((res) => {
    dispatch(receiveOTSession({ session }));
  }, (err) => {
    dispatch(receiveOTSessionError(err));
  });
};
