import { connect } from 'react-redux';
import Tabs from './Tabs';

const mapStateToProps = () => ({
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
});

export default connect(mapStateToProps, null)(Tabs);
