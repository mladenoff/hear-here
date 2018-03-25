import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  
};

const CurrentSong = props => (
  <div className='current-song-flag'>
    Current: {props.currentSong}
  </div>
)

export default connect(mapStateToProps)(CurrentSong);
