import { combineReducers } from 'redux';
import { organizationsReducer } from './organizations_reducer';

export default combineReducers({
  organizations: organizationsReducer
});

