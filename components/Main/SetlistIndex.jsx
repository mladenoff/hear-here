import React from 'react';

import SetlistIndexItem from './SetlistIndexItem';

class SetlistIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        eeeeeyyyy
        {this.props.setlists.map(setlist => (
          <SetlistIndexItem
            setlist={setlist}
            key={setlist.id}
            band={this.props.bands[setlist.bandId]}
          />
        ))}
      </ul>
    );
  }
}

export default SetlistIndex;
