import React from 'react';
import { updateActiveSong } from '../../actions/songActions';
import { connect } from 'react-redux';

// SELECTOR
const isActive = (state, songId) => {
  debugger
  return state.ui.display.activeSongId === songId;
}

// CONNECT
const mapStateToProps = (state, { item }) => ({
  isActive: isActive(state, item.id),
  archiveInProgress: state.ui.display.archiveId
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateActiveSong: id => dispatch(updateActiveSong(id))
})

// COMPONENT

const SetlistItem = ({ updateActiveSong, isActive, item: song }) => {
  let className = 'setlist-item';

  if (isActive) className += ' song-active';

  debugger
  return (
    <div
      className={className}
      onClick={() => updateActiveSong(song.id)}
      >
      {song.title}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SetlistItem);
