import { connect } from 'react-redux';

import SetlistIndex from './SetlistIndex';
import { fetchSetlists, setAsPlaying } from '../../actions/setlistActions';
import { createOTSession } from '../../actions/otSessionActions';
import { fetchBands } from '../../actions/bandActions';
import { nowPlayingSelector } from '../../reducers/selectors';

const mapStateToProps = state => ({
  bands: state.bands,
  setlists: nowPlayingSelector(state.setlists),
});

const mapDispatchToProps = dispatch => ({
  fetchSetlists: () => dispatch(fetchSetlists()),
  fetchBands: () => dispatch(fetchBands()),
  setAsPlaying: setlistId => dispatch(setAsPlaying(setlistId)),
  joinSession: () => dispatch(createOTSession()),

});

export default connect(mapStateToProps, mapDispatchToProps)(SetlistIndex);
