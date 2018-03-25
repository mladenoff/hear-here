import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import NavSearch from './NavSearch';
import { executeSearch } from '../../actions/searchActions';

const mapDispatchToProps = dispatch => ({
  search: (query) => dispatch(executeSearch(query))
});

export default withRouter(connect(null, mapDispatchToProps)(NavSearch));
