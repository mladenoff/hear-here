import React from 'react';
import { Link } from 'react-router-dom';

const Tabs = ({ tabs }) => (
  <section>
    {
      tabs.map(tab => (
        <Link key={tab.route} to={tab.route}>{tab.name}</Link>
      ))
    }
  </section>
);

export default Tabs;
