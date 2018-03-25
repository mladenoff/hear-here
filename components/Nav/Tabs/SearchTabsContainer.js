import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Tabs from './Tabs';

const mapStateToProps = (state, ownProps) => ({
  tabs: [
    {
      name: 'Bands',
      route: '/search/bands',
    },
    {
      name: 'Setlists',
      route: '/search/setlists',
    },
    {
      name: 'Songs',
      route: '/search/songs',
    },
  ],
  curr: ownProps.location.pathname,
});

export default withRouter(connect(mapStateToProps)(Tabs));