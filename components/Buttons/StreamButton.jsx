import React from 'react';
import { connect } from 'react-redux';
import { createOTSession } from '../../actions/otSessionActions';
import { createStream } from '../../actions/activeStreamActions';
import { withRouter } from 'react-router';

const StreamButton = props => (
  <button
    className='stream-now-button'
    onClick={() => props.createSession()}
  >
    Start Streaming
  </button>
);

const mapDispatchToProps = (dispatch, own) => ({
  createSession: () => {
    dispatch(createOTSession()).then(res => {
      dispatch(createStream({sessionId: res.sessionId, setlistId: own.match.params.setlistId}))
    });
  }
});

export default withRouter(connect(null, mapDispatchToProps)(StreamButton));
