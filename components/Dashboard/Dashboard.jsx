import React from 'react';
import { connect } from 'react-redux';
import { createOTSession } from '../../actions/otSessionActions';

const Dashboard = props => (
  <button
    onClick={() => props.createSession()}
    >Start Streaming
  </button>
)

const mapDispatchToProps = dispatch => ({
  createSession: () => dispatch(createOTSession())
})

export default connect(null, mapDispatchToProps)(Dashboard);
