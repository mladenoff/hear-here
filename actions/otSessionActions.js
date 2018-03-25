import * as openTokUtil from '../util/openTokUtil';
import { displayVideo } from './uiActions';

export const otSessionConstants = {
  RECEIVE_OT_SESSION: 'RECEIVE_OT_SESSION',
  RECEIVE_OT_SESSION_TOKEN: 'RECEIVE_OT_SESSION_TOKEN',
  RECEIVE_OT_SESSION_ERROR: 'RECEIVE_OT_SESSION_ERROR',
};

export const receiveOTSession = data => ({
  type: otSessionConstants.RECEIVE_OT_SESSION, data
});

export const receiveOTSessionToken = token => {
  debugger
  return {
    type: otSessionConstants.RECEIVE_OT_SESSION_TOKEN, token
  };
};

export const receiveOTSessionError = error => ({
  type: otSessionConstants.RECEIVE_OT_SESSION_ERROR, error
});

export const createOTSession = () => dispatch => {
  return openTokUtil.createSession().then((session) => {
    dispatch(receiveOTSession(session));
    dispatch(displayVideo());
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

  debugger
  return fetch(url, requestOptions)
    .then(res => {
      return res.json();
    }).then(response => {
      dispatch(receiveOTSessionToken(response.newToken));
    });
};
