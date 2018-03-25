import React from 'react';

class SongResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    let { setlists, bands, songs} = this.props;
    if (Object.keys(songs).length === 0) return null;
    return(
      <div>
        <h1>Results</h1>
        <div>
          <ul>
            {Object.values(songs).map(song => (
              <li className="set-list-item">
                <span>{song.title}</span> <br/>
                <button>Subscribe</button>
              </li>
            ))}
          </ul>
        </div>

      </div>
    );
  }
}

export default SongResults;
