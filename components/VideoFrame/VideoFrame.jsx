import React from 'react';
import { OTSession, OTPublisher, OTStreams, OTSubscriber } from 'opentok-react';
import OT from '@opentok/client';
import { API_KEY, API_SECRET, TOKEN } from '../../config/config';

const defaultSizing = { width: '100%', height: '100%' };


export default class VideoFrame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      connection: 'Connecting',
      publishVideo: true,
    };

    this.sessionEventHandlers = {
      sessionConnected: () => {
        this.setState({ connection: 'Connected' });
      },
      sessionDisconnected: () => {
        this.setState({ connection: 'Disconnected' });
      },
      sessionReconnected: () => {
        this.setState({ connection: 'Reconnected' });
      },
      sessionReconnecting: () => {
        this.setState({ connection: 'Reconnecting' });
      },
    };

    this.publisherEventHandlers = {
      accessDenied: () => {
        console.log('User denied access to media source');
      },
      streamCreated: () => {
        console.log('Publisher stream created');
      },
      streamDestroyed: ({ reason }) => {
        console.log(`Publisher stream destroyed because: ${reason}`);
      },
    };

    this.subscriberEventHandlers = {
      videoEnabled: () => {
        console.log('Subscriber video enabled');
      },
      videoDisabled: () => {
        console.log('Subscriber video disabled');
      },
    };

    this.onSessionError = this.onSessionError.bind(this);
    this.onPublish = this.onPublish.bind(this);
    this.onPublishError = this.onPublishError.bind(this);
    this.onSubscribe = this.onSubscribe.bind(this);
    this.onSubscribeError = this.onSubscribeError.bind(this);
    this.toggleVideo = this.toggleVideo.bind(this);
  }

  // EVENT LISTENERS

  onSessionError (error) {
    this.setState({ error });
  }

  onPublish() {
    console.log('Publish Success');
  }

  onPublishError (error) {
    this.setState({ error });
  }

  onSubscribe()  {
    console.log('Subscribe Success');
  }

  onSubscribeError(error) {
    this.setState({ error });
  }

  toggleVideo()  {
    this.setState({ publishVideo: !this.state.publishVideo });
  }

  // LIFECYCLE METHODS

  // componentDidMount() {
  //   this.props.createSession();
  // }

  render() {
    if (!this.props.displayVideo) return null;

    const { sessionId, sessionToken } = this.props;
    const { error, connection, publishVideo } = this.state;
    
    return (
      <div style={defaultSizing} className='publisher-window'>
        <OTSession
          style={defaultSizing}
          apiKey={API_KEY}
          sessionId={sessionId}
          token={sessionToken}
          onError={this.onSessionError}
          eventHandlers={this.sessionEventHandlers}
        >
          {/*}<button id="videoButton" onClick={this.toggleVideo}>
            {publishVideo ? 'Disable' : 'Enable'} Video
          </button>*/}
          <OTPublisher
            properties={{ publishVideo, width: '100%', height: '100%' }}
            onPublish={this.onPublish}
            onError={this.onPublishError}
            eventHandlers={this.publisherEventHandlers}
          />
        </OTSession>
      </div>
    );
  }
}
