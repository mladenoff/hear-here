import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TabsContainer from './tabs/TabsContainer';
import BackButton from '../shared/BackButton';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    clearTimeout(this.timeout);

    this.setState({ query: e.target.value }, () => {
      this.timeout = setTimeout(() => {
        // API Call here
        console.log(this.state);
      }, 300);
    });
  }

  render() {
    return (
      <nav>
        <Route
          path="/search"
          component={BackButton} />
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.query} />
        <Switch>
          <TabsContainer />
        </Switch>
      </nav>
    );
  }
}

export default Nav;
