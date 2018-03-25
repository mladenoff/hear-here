import React from 'react';
import { withRouter } from 'react-router';

class NavSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.startSearch = this.startSearch.bind(this);
  }

  handleChange(e) {
    clearTimeout(this.timeout);

    this.setState({ query: e.target.value }, () => {
      this.props.history.replace(`/search?query=${this.state.query}`);

      this.timeout = setTimeout(() => {
        // API Call here
        console.log(this.state);
      }, 300);
    });
  }

  startSearch() {
    this.props.history.push('/search');
  }

  render() {
    return (
      <input
        type="text"
        onChange={this.handleChange}
        onFocus={this.startSearch}
        placeholder="Search"
        value={this.state.query} />
    );
  }
}

export default withRouter(NavSearch);
