import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Menu from './Menu';

const mapStateToProps = state => ({
  isManager: state.session.currentUser && state.session.currentUser.isManager,
});

export default withRouter(connect(mapStateToProps, null)(Menu));
