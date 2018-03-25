import React from 'react';
import { connect } from 'react-redux';

const Dashboard = props => (
  <button
    onClick={() => props.createSession()}
    >Start Streaming
  </button>
)

const mapDispatchToProps = dispatch => ({
  createSession: () => dispatch(createSession())
})

export default connect(null, mapDispatchToProps)(Dashboard);
