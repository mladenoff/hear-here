import { connect } from 'react-redux';

import SetlistIndex from './SetlistIndex';

const nowPlayingSelector = (setlists) => {
  const filteredLists = {};

  Object.keys(setlists).map((key) => {
    if (setlists.key.nowPlaying) {
      filteredLists[key] = setlists.key;
    }
  });

  return filteredLists;
};

const mapStateToProps = state => ({
  bands: state.bands,
  setlists: nowPlayingSelector(state.setlists),
});

export default connect(mapStateToProps)(SetlistIndex);
