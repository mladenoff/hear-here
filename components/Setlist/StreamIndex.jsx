import React from 'react';
import SetlistIndexItem from './SetlistIndexItem';
import { Link } from 'react-router-dom';

class StreamIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchStreams();
  }

  render() {
    console.log(this.props.streams);
      return (
        <div>
        <ul>
          {this.props.streams.map(stream => (
          <li className="set-list-item">
          <Link to={`/streams/${stream.session_id}`}>
            Stream
          </Link>
        </li>
          ))}
          </ul>
          </div>
      );
  }
}

export default StreamIndex;
