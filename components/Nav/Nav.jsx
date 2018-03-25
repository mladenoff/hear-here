import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserTabsContainer from './Tabs/UserTabsContainer';
import ManageTabsContainer from './Tabs/ManageTabsContainer';
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
      <Route path="/search" component={() => null} />
      <Route path="/manage" component={ManageTabsContainer} />
      <UserTabsContainer />
    </Switch>
  </header>
);
