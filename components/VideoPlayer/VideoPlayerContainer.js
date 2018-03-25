import VideoPlayer from './VideoPlayer';
import { connect } from 'react-redux';
import { createOTSession } from '../../actions/otSessionActions';

// const mapStateToProps = state => ({
//
// });

const mapDispatchToProps = dispatch => ({
  createSession: () => dispatch(createOTSession())
});

export default connect(null, mapDispatchToProps)(VideoPlayer);
