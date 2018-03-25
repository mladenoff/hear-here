import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import SessionButtons from './SessionButtons';
import { signup, login, logout } from '../../actions/sessionActions';

const mapStateToProps = (state) => {
  let buttons;
  if (state.session.currentUser) {
    buttons = [
      {
        text: 'Log out',
        action: 'logout',
      },
    ];
  } else {
    buttons = [
      {
        text: 'Log in',
        action: 'login',
      },
      {
        text: 'Sign up',
        action: 'signup',
      },
    ];
  }
  return ({
    buttons,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: (user) => dispatch(logout(user)),
  login: () => ownProps.history.push('/login'),
  signup: () => ownProps.history.push('/signup'),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionButtons));
