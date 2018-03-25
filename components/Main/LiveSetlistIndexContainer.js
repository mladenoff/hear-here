import { connect } from 'react-redux';

import SetlistIndex from '../Setlist/SetlistIndex';
import { fetchSetlists, setAsPlaying } from '../../actions/setlistActions';
import { fetchBands } from '../../actions/bandActions';
import { nowPlayingSelector } from '../../reducers/selectors';

const mapStateToProps = state => ({
  bands: state.bands,
  setlists: nowPlayingSelector(state.setlists.entities),
});

const mapDispatchToProps = dispatch => ({
  fetchSetlists: () => dispatch(fetchSetlists()),
  fetchBands: () => dispatch(fetchBands()),
  setAsPlaying: setlistId => dispatch(setAsPlaying(setlistId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SetlistIndex);
