import VideoFrame from './VideoFrame';
import { connect } from 'react-redux';
import { createOTSession } from '../../actions/otSessionActions';

const mapStateToProps = state => ({
  displayVideo: state.ui.displayVideo
});

export default connect(mapStateToProps)(VideoFrame);
