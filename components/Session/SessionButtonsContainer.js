import { connect } from 'react-redux';
import SessionButtons from './SessionButtons';
import { signup, login, logout } from '../../actions/sessionActions';

const mapStateToProps = (state) => {
  let sessionButtons;
  if (state.session.currentUser) {
    sessionButtons = [
      {
        text: 'Log out',
        action: 'logout',
      }
    ];
  } else {
    sessionButtons = [
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
    sessionButtons,
  });
};

const mapDispatchToProps = (dispatch) => ({
  signup: (user) => dispatch(signup(user)),
  login: (user) => dispatch(login(user)),
  logout: (user) => dispatch(logout(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionButtons);