import * as APIUtil from '../util/active_streams_api_util';

export const RECEIVE_ACTIVE_STREAMS = 'RECEIVE_ACTIVE_STREAMS';
export const RECEIVE_ACTIVE_STREAM = 'RECEIVE_ACTIVE_STREAM';

export const receiveActiveStreams = streams => ({
  type: RECEIVE_ACTIVE_STREAMS,
  streams,
});

export const receiveActiveStream = stream => ({
  type: RECEIVE_ACTIVE_STREAM,
  stream,
});

export const fetchStreams = () => (dispatch) => {
  APIUtil.fetchAllActiveStreams().then(streams => {
    dispatch(receiveActiveStreams(streams));
  });
};

export const createStream = (formStream) => (dispatch, getState) => {
  const state = getState();
  formStream.activeSongId = state.setlists.entities[formStream.setlistId].songs[0].id;
  APIUtil.createActiveStream(formStream).then(
    res => dispatch(receiveActiveStream(res.returning[0])),
  );
}

window.createStream = createStream;