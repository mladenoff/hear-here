

const OT = require('@opentok/client');
// import { OTSession } from 'opentok-react';
// initWith(ApiKey:(apiKey sessionId:(nonnull NSString *)sessionId delegate:(nullable id<OTSessionDelegate>)delegate

// // Handling all of our errors here by alerting them
// function handleError(error) {
//   if (error) {
//     alert(error.message);
//   }
// }
//
// // (optional) add server code here
// initializeSession();
//
// function initializeSession() {
//   const session = OT.initSession(API_KEY, SESSION_ID);
//
//   // Subscribe to a newly created stream
//   session.on('streamCreated', function(event) {
//     session.subscribe(event.stream, 'subscriber', {
//       insertMode: 'append',
//       width: '100%',
//       height: '100%'
//     }, handleError);
//   });
//
//   // Create a publisher
//   const publisher = OT.initPublisher('publisher', {
//     insertMode: 'append',
//     width: '100%',
//     height: '100%'
//   }, handleError);
//
//   // Connect to the session
//   session.connect(TOKEN, function(error) {
//     // If the connection is successful, initialize a publisher and publish to the session
//     if (error) {
//       handleError(error);
//     } else {
//       session.publish(publisher, handleError);
//     }
//   });
// }
import React from 'react';
import { OTSession, OTPublisher, OTStreams, OTSubscriber } from 'opentok-react';

export default class App extends React.Component {
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
    this.togglethis.toggleVideo.bind(this);
  }

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

  render() {
    const { apiKey, sessionId, token } = this.props.credentials;
    const { error, connection, publishVideo } = this.state;
    return (
      <div>
        <div id="sessionStatus">Session Status: {connection}</div>
        {error ? (
          <div className="error">
            <strong>Error:</strong> {error}
          </div>
        ) : null}
        <OTSession
          apiKey={apiKey}
          sessionId={sessionId}
          token={token}
          onError={this.onSessionError}
          eventHandlers={this.sessionEventHandlers}
        >
          <button id="videoButton" onClick={this.toggleVideo}>
            {publishVideo ? 'Disable' : 'Enable'} Video
          </button>
          <OTPublisher
            properties={{ publishVideo, width: 50, height: 50, }}
            onPublish={this.onPublish}
            onError={this.onPublishError}
            eventHandlers={this.publisherEventHandlers}
          />
          <OTStreams>
            <OTSubscriber
              properties={{ width: 100, height: 100 }}
              onSubscribe={this.onSubscribe}
              onError={this.onSubscribeError}
              eventHandlers={this.subscriberEventHandlers}
            />
          </OTStreams>
        </OTSession>
      </div>
    );
  }
}
