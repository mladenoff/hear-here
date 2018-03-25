import VideoFrame from './VideoFrame';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createOTSession } from '../../actions/otSessionActions';

const mapStateToProps = state => ({
  displayVideo: state.ui.displayVideo,
  sessionId: state.session.sessionId,
  sessionToken: state.session.sessionToken,
});

export default withRouter(connect(mapStateToProps)(VideoFrame));
