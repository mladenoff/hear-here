import React from 'react';
import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import UserTabsContainer from './tabs/UserTabsContainer';
import ManageTabsContainer from './tabs/ManageTabsContainer';
import BackButton from '../shared/BackButton';

class Nav extends React.Component {
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
      this.props.history.push(`/search?query=${this.state.query}`);

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
      <nav>
        <Switch>
          <Route
            path="/search"
            component={BackButton} />
          <img
            className="logo"
            src="./assets/music.png"
            alt="music logo" />
        </Switch>
        <input
          type="text"
          onChange={this.handleChange}
          onFocus={this.startSearch}
          value={this.state.query} />
        <Switch>
          <Route path="/search" component={() => null} />
          <Route path="/manage" component={ManageTabsContainer} />
          <UserTabsContainer />
        </Switch>
      </nav>
    );
  }
}

export default withRouter(Nav);
