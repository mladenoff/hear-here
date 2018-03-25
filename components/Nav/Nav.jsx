import React from 'react';
import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import UserTabsContainer from './Tabs/UserTabsContainer';
import ManageTabsContainer from './Tabs/ManageTabsContainer';
import LeftNav from './LeftNav';
import MenuContainer from './Menu/MenuContainer';

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
      <header>
        <section className="upper-nav">
          <LeftNav />
          <input
            type="text"
            onChange={this.handleChange}
            onFocus={this.startSearch}
            placeholder="Search"
            value={this.state.query} />
          <MenuContainer menuToggle={this.state.menuToggle} />
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
