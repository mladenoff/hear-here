import { connect } from 'react-redux';
import { withRouter } from "react-router";
import Tabs from './Tabs';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  if (ownProps.location.pathname.includes('manage')) {
    return {
      tabs: [
        {
          name: 'Upcoming',
          route: '/manage/upcoming',
        },
        {
          name: 'Past',
          route: '/manage/past',
        },
      ],
    };
  }
  return {
    tabs: [
      {
        name: 'Live',
        route: '/live',
      },
      {
        name: 'Upcoming',
        route: '/upcoming',
      },
    ],
  };
};

export default withRouter(connect(mapStateToProps, null)(Tabs));
