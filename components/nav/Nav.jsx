import React from 'react';
import { withRouter } from 'react-router';
import { Switch, Route, Link } from 'react-router-dom';
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
      <header>
        <section className="upper-nav">
          <Link to="/live" className="upper-left-nav-container">
            <Switch>
              <Route
                path="/search"
                component={BackButton} />
              <img
                className="logo"
                src="./assets/music.png"
                alt="music logo" />
            </Switch>
          </Link>
          <input
            type="text"
            onChange={this.handleChange}
            onFocus={this.startSearch}
            placeholder="Search"
            value={this.state.query} />
          <div className="menu-container">
          |||
          </div>
        </section>
        <Switch>
          <Route path="/search" component={() => null} />
          <Route path="/manage" component={ManageTabsContainer} />
          <UserTabsContainer />
        </Switch>
      </header>
    );
  }
}

export default withRouter(Nav);
