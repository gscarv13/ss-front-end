import { combineReducers } from 'redux';
import fetchReducers from './fetchReducers';

export default combineReducers({
  fetchReducersObject: fetchReducers,
});
