import * as openTokUtil from '../util/openTokUtil';
import { displayVideo } from './uiActions';
import { createStream } from './activeStreamActions';

export const otSessionConstants = {
  RECEIVE_OT_SESSION: 'RECEIVE_OT_SESSION',
  RECEIVE_OT_SESSION_TOKEN: 'RECEIVE_OT_SESSION_TOKEN',
  RECEIVE_OT_SESSION_ERROR: 'RECEIVE_OT_SESSION_ERROR',
};

export const receiveOTSession = data => ({
  type: otSessionConstants.RECEIVE_OT_SESSION, data
});

export const receiveOTSessionToken = token => {
  return {
    type: otSessionConstants.RECEIVE_OT_SESSION_TOKEN, token
  };
};

export const receiveOTSessionError = error => ({
  type: otSessionConstants.RECEIVE_OT_SESSION_ERROR, error
});

export const createOTSession = () => dispatch => {
  return openTokUtil.createSession().then(({ token, sessionId }) => {
    dispatch(receiveOTSession({ token, sessionId }));
    dispatch(displayVideo());
    return { sessionId };
  }, (err) => {
    dispatch(receiveOTSessionError(err));
  });
};

export const fetchOTSession = sessionId => dispatch => {
  const url = `https://api.blockbusting65.hasura-app.io/v1/fetchSession/${sessionId}`;

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  };

  return fetch(url, requestOptions)
    .then(res => {
      return res.json();
    }).then(response => {
      dispatch(receiveOTSessionToken(response.newToken));
    });
};
