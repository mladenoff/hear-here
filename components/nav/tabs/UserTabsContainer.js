import { connect } from 'react-redux';
import Tabs from './Tabs';

const mapStateToProps = () => ({
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
});

export default connect(mapStateToProps, null)(Tabs);
