import React from 'react';
import { connect } from 'react-redux';

// SELECTOR
const isActive = (state, songId) => {
  return state.ui.activeSongId === songId;
}

// CONNECT
const mapStateToProps = (state, { item }) => {
  isActive: isActive(state, item.id)
}

// COMPONENT

const SetlistItem = (props) => {
  debugger
  return (
    <div className='setlist-item'>
      {props.item.title}
    </div>
  );
};

export default SetlistItem;
