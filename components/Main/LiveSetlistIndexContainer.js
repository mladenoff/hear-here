import { connect } from 'react-redux';

import SetlistIndex from './SetlistIndex';
import { nowPlayingSelector } from '../../reducers/selectors';

const mapStateToProps = state => ({
  bands: state.bands,
  setlists: nowPlayingSelector(state.setlists),
});

export default connect(mapStateToProps)(SetlistIndex);
