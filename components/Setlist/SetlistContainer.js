import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Setlist from './Setlist';
import { fetchSetlist } from '../../actions/setlistActions';

const nowPlayingSelector = (setlists) => {
  const filteredLists = {};

  Object.keys(setlists).map((key) => {
    if (setlists.key.nowPlaying) {
      filteredLists[key] = setlists.key;
    }
  });

  return filteredLists;
};

const mapStateToProps = (state, ownProps) => {
  const setlist = state.setlists.entities[ownProps.match.params.setlistId];
  const songs = (setlist && setlist.songs.map(song => song.id)) || [];
  const currentSongIdx = songs.indexOf(state.ui.display.activeSongId);

  return {
    loading: state.setlists.loading,
    setlist: setlist || {},
    items: songs.map(id => state.songs[id]),
    currentSongIdx: (currentSongIdx >= 0 ? currentSongIdx : 0)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchSetlist: setlistId => dispatch(fetchSetlist(setlistId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Setlist));
