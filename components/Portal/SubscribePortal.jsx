import React from 'react';
import VideoFrameContainer from '../VideoFrame/VideoFrameContainer';
import CurrentSong from './CurrentSong';

class SubscribePortal extends React.Component {
  constructor(props) {
    super(props)

    this.state = { subscribed: false }
  }

  componentDidMount() {
    debugger
    const url = `https://api.blockbusting65.hasura-app.io/v1/fetchSession/${this.props.sessionId}`;

    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    };

    debugger
    return fetch(url, requestOptions)
      .then(res => {
        debugger
        return res.json();
      });

  }

  render() {
    debugger
    if (!this.state.subscribed) return null;
    return(
      <div className='stream-portal'>
        <section className='stream-button-container subscribe-portal'>
          <VideoFrameContainer displayVideo/>
          {/*<CurrentSong />*/}
        </section>
      </div>
    );
  }
}

// const SubscribePortal = props => {
// }

export default SubscribePortal;
