import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_ORG,
  RECEIVE_ORG_LOGOUT,
  RECEIVE_ORG_SIGN_IN
} from '../actions/session_actions';

const initialState ={
  isAuthenticated: false,
  org: {}
}

export default (state = initialState, action) =>{
  switch(action.type){
    case RECEIVE_CURRENT_ORG:
      return merge({}, state, {
        isAuthenticated: !!action.currentOrg,
        org: action.currentOrg
      });
    case RECEIVE_ORG_LOGOUT:
      return {
        isAuthenticated: false,
        org: undefined
      };
    case RECEIVE_ORG_SIGN_IN:
      return merge({}, state, {
        isAuthenticated: true
      });
    default: 
      return state;
  }
}