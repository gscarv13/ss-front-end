import { combineReducers } from 'redux';
import schedulesReducer from './schedulesReducers';
import activitiesReducer from './activitiesReducer';
import userReducer from './userReducer';

export default combineReducers({
  schedulesStateObject: schedulesReducer,
  activitiesStateObject: activitiesReducer,
  userObject: userReducer,
});
