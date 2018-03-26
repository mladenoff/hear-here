import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import StreamIndex from '../Setlist/StreamIndex';
import { fetchStreams } from '../../actions/activeStreamActions';
import { fetchBands } from '../../actions/bandActions';
import { fetchSetlists } from '../../actions/setlistActions';
import { nowPlayingSelector } from '../../reducers/selectors';
import { fips } from 'crypto';

const mapStateToProps = state => {
  return ({
    streams: state.streams,
    setlists: state.setlists.entities,
    bands: state.bands
  });
};

const mapDispatchToProps = dispatch => ({
  fetchStreams: () => dispatch(fetchStreams()),
  fetchSetlists: () => dispatch(fetchSetlists()),
  fetchBands: () => dispatch(fetchBands())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StreamIndex));
