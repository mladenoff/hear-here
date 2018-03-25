import VideoFrame from './VideoFrame';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createOTSession } from '../../actions/otSessionActions';

const mapStateToProps = (state, ownProps) => ({
  displayVideo: state.ui.display.displayVideo || ownProps.displayVideo,
  sessionId: state.ui.otSession.sessionId || ownProps.match.params.sessionId,
  sessionToken: state.ui.otSession.sessionToken,
  openTok: state.ui.otSession.openTok,
});

export default withRouter(connect(mapStateToProps)(VideoFrame));
