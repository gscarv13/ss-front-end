import { combineReducers } from 'redux';
import fetchReducers from './fetchReducers';
import userReducer from './userReducer';

export default combineReducers({
  fetchReducersObject: fetchReducers,
  userObject: userReducer,
});
