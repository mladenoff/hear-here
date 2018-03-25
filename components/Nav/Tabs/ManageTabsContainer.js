import { connect } from 'react-redux';
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

export default connect(mapStateToProps, null)(Tabs);
