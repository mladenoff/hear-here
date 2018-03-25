import React from 'react';
import { connect } from 'react-redux';

// SELECTOR
const isActive = (state, songId) => {
  return state.ui.display.activeSongId === songId;
}

// CONNECT
const mapStateToProps = (state, { item }) => {
  isActive: isActive(state, item.id)
}

// COMPONENT

const SetlistItem = ({ isActive }) => {
  let className = 'setlist-item';

  if (isActive) className += 'song-active';

  return (
    <div className={className}>
      {props.item.title}
    </div>
  );
};

export default SetlistItem;
