import React from 'react';
import { Link } from 'react-router-dom';

class SetlistIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
      debugger
  }

  render() {
    return (
      <li className="set-list-item">
        <Link to={`/setlist/${this.props.setlist.id}`}>
        <a><img src={"img source url here"} /></a>
        <span>{this.props.setlist.name}</span> <br/>
        <span>{this.props.setlist.description}</span> <br />
        <span>{this.props.band ? this.props.band.name : null}</span> <br />
        <button onClick={this.handleClick}>Watch Here</button>
        </Link>
      </li>
    );
  }
}

export default SetlistIndexItem;
