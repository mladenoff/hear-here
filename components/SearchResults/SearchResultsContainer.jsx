import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import { fetchBands } from '../../actions/bandActions';

const mapStateToProps = ({search}) => {
  return {
  bands: search.bands,
  setlists: search.setlists,
  songs: search.songs
  };
};

const mapDispatchToProps = dispatch => ({
  fetchBands: () => dispatch(fetchBands()),
});

export default connect(mapStateToProps)(SearchResults);