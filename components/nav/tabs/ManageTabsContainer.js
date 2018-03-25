import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Tabs from './Tabs';

const mapStateToProps = (state, ownProps) => ({
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
  curr: ownProps.location.pathname,
});

export default withRouter(connect(mapStateToProps, null)(Tabs));
