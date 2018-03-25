import React from 'react';
import VideoFrameContainer from '../VideoFrame/VideoFrameContainer';
import CurrentSong from './CurrentSong';

class SubscribePortal extends React.Component {
  constructor(props) {
    super(props)

    this.state = { subscribed: false }
  }

  componentDidMount() {
    this.props.fetchOTSession(this.props.match.params.sessionId)
        .then(() => this.setState({ subscribed: true }));
  }

  render() {
    if (!this.state.subscribed) return null;

    return(
      <div className='stream-portal'>
        <section className='stream-button-container subscribe-portal'>
          <VideoFrameContainer displayVideo isPublisher={false} />
          {/*<CurrentSong />*/}
        </section>
      </div>
    );
  }
}

export default SubscribePortal;
