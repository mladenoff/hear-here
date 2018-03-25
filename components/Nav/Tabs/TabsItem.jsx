import React from 'react';
import { Link } from 'react-router-dom';

const TabsItem = ({ tab, curr }) => {
  return (
    <Link
      replace
      id={curr === tab.route ? 'selected' : ''}
      className="tab"
      to={tab.route} >
      {tab.name}
    </Link>
  );
}

export default TabsItem;