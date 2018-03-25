import { connect } from 'react-redux';

import SetlistIndex from './SetlistIndex';

const upcomingSelector = (setlists) => {
  return setlists;
};

const mapStateToProps = state => ({
  bands: state.bands,
  setlists: upcomingSelector(state.setlists),
});

export default connect(mapStateToProps)(SetlistIndex);
