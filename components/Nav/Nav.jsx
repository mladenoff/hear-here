import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserTabsContainer from './Tabs/UserTabsContainer';
import ManageTabsContainer from './Tabs/ManageTabsContainer';
import SearchTabsContainer from './Tabs/SearchTabsContainer';
import LeftNav from './LeftNav';
import MenuContainer from './Menu/MenuContainer';
import NavSearchContainer from './NavSearchContainer';

export default () => (
  <header>
    <section className="upper-nav">
      <LeftNav />
      <NavSearchContainer />
      <MenuContainer />
    </section>
    <Switch>
      <Route path="/search" component={SearchTabsContainer} />
      <Route path="/signup" component={() => null} />
      <Route path="/login" component={() => null} />
      <Route path="/manage" component={ManageTabsContainer} />
      <UserTabsContainer />
    </Switch>
  </header>
);
