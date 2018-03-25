import { connect } from 'react-redux';

import SetlistIndex from '../Setlist/SetlistIndex';
import { fetchSetlists, setAsPlaying } from '../../actions/setlistActions';
import { fetchBands } from '../../actions/bandActions';
import { upcomingSelector } from '../../reducers/selectors';

const mapStateToProps = state => ({
  bands: state.bands,
  setlists: upcomingSelector(state.setlists),
});

const mapDispatchToProps = dispatch => ({
  fetchSetlists: () => dispatch(fetchSetlists()),
  fetchBands: () => dispatch(fetchBands()),
  setAsPlaying: setlistId => dispatch(setAsPlaying(setlistId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SetlistIndex);
