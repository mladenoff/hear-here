import React from 'react';
import Setlist from '../Setlist/SetlistContainer';
import StreamButton from '../Buttons/StreamButton';
import VideoFrameContainer from '../VideoFrame/VideoFrameContainer';
import { connect } from 'react-redux';

const StreamPortal = ({ streaming }) => (
  <div className='stream-portal'>
    <Setlist />
    <section className='stream-button-container'>
      { streaming
        ?
        <VideoFrameContainer />
        :
        <StreamButton />
      }
    </section>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  return {
    streaming: state.ui.display.displayVideo
  };
};

export default connect(mapStateToProps)(StreamPortal);
