import React from 'react';

class SetlistIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="set-list-item">
        <a><img /></a>
        <span>{this.props.setlist.name}</span> <br/>
        <span>{this.props.setlist.description}</span> <br />
        <span>{this.props.band ? this.props.band.name : null}</span> <br />
        <button>Subscribe</button>
      </li>
    );
  }
}

export default SetlistIndexItem;
