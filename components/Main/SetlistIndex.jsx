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
        <ul>
          {this.props.setlists.map(setlist => (
            <SetlistIndexItem
              setlist={setlist}
              key={setlist.id}
              joinSession={this.props.joinSession}
              band={this.props.bands[setlist.band_id]}
            />
          ))}
        </ul>
      );
    }
    return null;
  }
}

export default SetlistIndex;
