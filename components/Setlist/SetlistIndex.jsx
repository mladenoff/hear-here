import React from 'react';
import SetlistIndexItem from './SetlistIndexItem';

class SetlistIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBands();
    this.props.fetchSetlists().then(() => this.props.setAsPlaying(4));
  }

  render() {
    if (this.props.setlists && this.props.bands) {
      return (
        <div>
        <ul>
          {this.props.setlists.map(setlist => (
            <SetlistIndexItem
              setlist={setlist}
              key={setlist.id}
              band={this.props.bands[setlist.band_id]}
            />
          ))}
        </ul>
        <button onClick={() => this.props.history.push('/streams/1_MX40NjA4Njg0Mn5-MTUyMjAxNDM5NDMxMX5CZ0NzaWEzUzNGUVQydEhHWFlJeFluNUd-UH4')}>Join a random stream</button>
        </div>
      );
    }
    return null;
  }
}

export default SetlistIndex;
