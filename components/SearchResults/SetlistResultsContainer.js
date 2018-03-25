import { connect } from 'react-redux';
import SetlistResults from './SetlistResults';
import { fetchBands } from '../../actions/bandActions';

const mapStateToProps = ({search}) => {
  return {
    bands: search.bands,
    setlists: search.setlists,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchBands: () => dispatch(fetchBands()),
});

export default connect(mapStateToProps)(SetlistResults);