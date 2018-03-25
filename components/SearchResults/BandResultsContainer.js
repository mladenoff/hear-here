import { connect } from 'react-redux';
import BandResults from './BandResults';
import { fetchBands } from '../../actions/bandActions';

const mapStateToProps = ({search}) => {
  return {
  bands: search.bands,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchBands: () => dispatch(fetchBands()),
});

export default connect(mapStateToProps)(BandResults);