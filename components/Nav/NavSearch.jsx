import React from 'react';
import { withRouter } from 'react-router';

class NavSearch extends React.Component {
  constructor(props) {
    super(props);
    let query = '';
    if (this.props.location.search){
      query = this.props.location.search.replace('?query=', '');

    }
    this.state = {
      query
    };

    this.handleChange = this.handleChange.bind(this);
    this.startSearch = this.startSearch.bind(this);
  }

  componentDidMount(){
    if(this.state.query){
      this.props.search(this.state.query);
    }
  }

  handleChange(e) {

    clearTimeout(this.timeout);

    this.setState({ query: e.target.value }, () => {
      this.props.history.replace(`/search?query=${this.state.query}`);

      this.timeout = setTimeout(() => {
        // API Call here
        this.props.search(this.state.query);
      }, 300);
    });
  }

  startSearch() {
    let hashUrl = '/search';
    this.props.history.push(hashUrl);
  }

  render() {
    return (
      <input
        ref="input"
        type="text"
        onChange={this.handleChange}
        onFocus={this.startSearch}
        placeholder="Search"
        value={this.state.query} />
    );
  }
}

export default withRouter(NavSearch);
