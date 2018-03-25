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
              <li className="set-list-item">
                <div>
                <a><img
                  className="search-img"
                  src={bands[setlist.band_id] ? bands[setlist.band_id].img_url : null }/></a>
                <span>{bands[setlist.band_id] ? bands[setlist.band_id].name : null}</span> <br />
                </div>
                <span className="set-list-name">{setlist.name}</span> <br/>
                <button>Subscribe</button>
              </li>
            ))}
          </ul>
        </div>

      </div>
    );
  }
}

export default SearchResults;