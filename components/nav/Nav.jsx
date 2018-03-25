import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import UserTabsContainer from './Tabs/UserTabsContainer';
import ManageTabsContainer from './Tabs/ManageTabsContainer';
import LeftNav from './LeftNav';
import MenuContainer from './Menu/MenuContainer';
import NavSearch from './NavSearch';

const Nav = () => (
  <header>
    <section className="upper-nav">
      <LeftNav />
      <NavSearch />
      <MenuContainer />
    </section>
    <Switch>
      <Route path="/search" component={() => null} />
      <Route path="/manage" component={ManageTabsContainer} />
      <UserTabsContainer />
    </Switch>
  </header>
);

export default withRouter(Nav);