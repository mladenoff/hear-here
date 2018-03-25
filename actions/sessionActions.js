import * as APIUtil from '../util/session_api_util';
import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

export const signup = formUser => (dispatch) => {
  return UserAPIUtil.createUser(formUser).then(
    user => dispatch(receiveCurrentUser(user.returning[0])),
  );
};

export const login = formUser => (dispatch) => {
  return APIUtil.createSession(formUser).then(
    user => dispatch(receiveCurrentUser(user)),
  );
};

export const logout = () => (dispatch) => {
  return APIUtil.deleteSession().then(
    response => dispatch(receiveCurrentUser(null)),
  );
};
