import React from 'react';
import TabsItem from './TabsItem';

const Tabs = ({ tabs , curr }) => (
  <section className="tabs">
    {
      tabs.map(tab => (
        <TabsItem key={tab.route} tab={tab} curr={curr} />
      ))
    }
  </section>
);

export default Tabs;
