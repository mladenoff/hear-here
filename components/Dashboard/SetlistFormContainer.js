import { connect } from 'react-redux';

import SetlistForm from './SetlistForm';
import { createSetlist } from '../../actions/setlistActions';
import { filterManagerBands } from '../../reducers/selectors';

const mapStateToProps = state => ({
  userBands: filterManagerBands(state.bands, state.session.currentUser.id),
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  createSetlist: setlist => dispatch(createSetlist(setlist)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SetlistForm);
