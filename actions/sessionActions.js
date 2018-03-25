import * as APIUtil from '../util/session_api_util';
import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user,
});

export const signup = formUser => (dispatch) => {
  return UserAPIUtil.createUser(formUser).then(
    user => dispatch(receiveUser(user.returning[0])),
  );
};

export const login = formUser => (dispatch) => {
  return APIUtil.createSession(formUser).then(
    user => dispatch(receiveUser(user)),
  );
};

export const logout = () => (dispatch) => {
  return APIUtil.deleteSession().then(
    response => dispatch(receiveUser(null)),
  );
};
