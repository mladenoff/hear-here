import { connect } from 'react-redux';
import SongResults from './SongResults';
import { fetchBands } from '../../actions/bandActions';

const mapStateToProps = ({search}) => {
  return {
    songs: search.songs || [],
    bands: search.bands || [],
    setlists: search.setlists || [],
  };
};

const mapDispatchToProps = dispatch => ({
  fetchBands: () => dispatch(fetchBands()),
});

export default connect(mapStateToProps)(SongResults);