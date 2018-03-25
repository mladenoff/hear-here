import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Tabs from './Tabs';
import { selectTabPathname } from '../../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
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
  curr: selectTabPathname(ownProps.location.pathname),
});

export default withRouter(connect(mapStateToProps, null)(Tabs));
