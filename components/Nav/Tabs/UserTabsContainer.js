import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Tabs from './Tabs';

const mapStateToProps = (state, ownProps) => ({
  tabs: [
    {
      name: 'Live Now',
      route: '/live',
    },
    {
      name: 'Upcoming',
      route: '/upcoming',
    },
  ],
  curr: ownProps.location.pathname,
});

export default withRouter(connect(mapStateToProps, null)(Tabs));
