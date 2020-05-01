import * as APIUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_CURRENT_ORG = 'RECEIVE_CURRENT_ORG';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_ORG_LOGOUT = 'RECEIVE_ORG_LOGOUT';
export const RECEIVE_ORG_SIGN_IN = 'RECEIVE_ORG_SIGN_IN';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentOrg = currentOrg => ({
  type: RECEIVE_CURRENT_ORG,
  currentOrg
});

export const receiveOrgSignIn = () => ({
  type: RECEIVE_ORG_SIGN_IN
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const logoutOrg = () => ({
  type: RECEIVE_ORG_LOGOUT
});

export const register = org => dispatch => (
  APIUtil.register(org).then(res => {
    const { token } = res.data;
    localStorage.setItem('jwtToken', token);
    APIUtil.setAuthToken(token);
    const decoded = jwt_decode(token);
    dispatch(receiveCurrentOrg(decoded))
  }, err => (
    dispatch(receiveErrors(err.response.data))
  ))
);

export const login = org => dispatch =>(
  APIUtil.login(org).then(res => {
    const { token } = res.data;
    localStorage.setItem('jwtToken', token);
    APIUtil.setAuthToken(token);
    const decoded = jwt_decode(token);
    dispatch(receiveCurrentOrg(decoded))
  })
  .catch(err => {
    dispatch(receiveErrors(err.response.data));
  })
)

export const logout = () => dispatch => {
  localStorage.removeItem('jwtToken')
  APIUtil.setAuthToken(false)
  dispatch(logoutOrg())
};