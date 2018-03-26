import React from 'react';
import SetlistIndexItem from './SetlistIndexItem';
import { Link } from 'react-router-dom';

class StreamIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBands();
    this.props.fetchStreams();
    this.props.fetchSetlists();
  }

  render() {
    console.log(this.props);
    let setlist;
    let band;
    this.props.streams.forEach(stream => {
      setlist = this.props.setlists[stream.setlist_id];
      if (setlist) {
        band = this.props.bands[setlist.band_id] || {name: ""};
      } else {
        setlist = {name: "" };
      }
    });
      return (
        <div>
        <ul>
          {this.props.streams.map(stream => (
          <li className="set-list-item">
          <Link to={`/streams/${stream.session_id}`}>
            {band ? band.name : null}
            {setlist ? setlist.name : null}
          </Link>
        </li>
          ))}
          </ul>
          </div>
      );
  }
}

export default StreamIndex;
