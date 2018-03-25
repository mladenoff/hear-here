import React from 'react';
import SetlistIndexItem from '../Setlist/SetlistIndexItem';
class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const { setlists, bands } = this.props;
    if (Object.keys(setlists).length === 0) return null;
    return(
      <div>
        <h1>Results</h1>
        <div>
          <ul>
            {Object.values(setlists).map(setlist => (
              <SetlistIndexItem
                setlist={setlist}
                key={setlist.id}
                band={this.props.bands[setlist.band_id]}
              />
            ))}
          </ul>
        </div>

      </div>
    );
  }
}

export default SearchResults;