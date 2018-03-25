import { connect } from 'react-redux';
import SubscribePortal from './SubscribePortal';
import { fetchOTSession } from '../../actions/otSessionActions';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = dispatch => ({
  fetchOTSession: sessionId => dispatch(fetchOTSession(sessionId))
});

export default withRouter(connect(null, mapDispatchToProps)(SubscribePortal));
