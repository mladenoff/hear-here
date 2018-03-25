import React from 'react';

class BandResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const { bands } = this.props;
    if (Object.keys(bands).length === 0) return null;
    return(
      <div>
        <h1>Results</h1>
        <div>
          <ul>
            {Object.values(bands).map(band => (
              <li className="set-list-item">
                <div>
                  <a><img src={band.img_url} className="search-img"/></a>
                  <span>{band.name}</span>
                </div>
                <button>Subscribe</button>
              </li>
            ))}
          </ul>
        </div>

      </div>
    );
  }
}

export default BandResults;
