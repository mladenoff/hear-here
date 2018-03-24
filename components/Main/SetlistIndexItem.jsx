import React from 'react';

class SetlistIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <a><img /></a>
        <span>{this.props.setlist.title}</span>
        <span>{this.props.setlist.description}</span>
        <span>{this.props.band.name}</span>
      </li>
    );
  }
}

export default SetlistIndexItem;
