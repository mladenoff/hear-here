import React from 'react';
import { connect } from 'react-redux';
import { createOTSession } from '../../actions/otSessionActions';

const StreamButton = props => (
  <button
    className='stream-now-button'
    onClick={() => props.createSession()}
  >
    Start Streaming
  </button>
)

const mapDispatchToProps = dispatch => ({
  createSession: () => dispatch(createOTSession())
})

export default connect(null, mapDispatchToProps)(StreamButton);
