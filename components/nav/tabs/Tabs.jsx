import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import TabsItem from './TabsItem';

const Tabs = ({ tabs , curr }) => (
  <section className="tabs">
    {
      tabs.map(tab => (
        <TabsItem key={tab.route} tab={tab} curr={curr} />
=======
=======
>>>>>>> Add Tabs, BackButton, and Nav Search
import { Link } from 'react-router-dom';

const Tabs = ({ tabs }) => (
  <section>
    {
      tabs.map(tab => (
        <Link key={tab.route} to={tab.route}>{tab.name}</Link>
<<<<<<< HEAD
>>>>>>> Add Tabs, BackButton, and Nav Search
=======
>>>>>>> Add Tabs, BackButton, and Nav Search
      ))
    }
  </section>
);

export default Tabs;
