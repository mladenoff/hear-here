import { connect } from 'react-redux';

import StreamIndex from '../Setlist/StreamIndex';
import { fetchStreams } from '../../actions/activeStreamActions';
import { nowPlayingSelector } from '../../reducers/selectors';

const mapStateToProps = state => ({
  streams: state.streams,
  setlists: state.setlists
});

const mapDispatchToProps = dispatch => ({
  fetchStreams: () => dispatch(fetchStreams()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StreamIndex);
