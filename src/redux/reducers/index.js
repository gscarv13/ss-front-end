import { combineReducers } from 'redux';
import schedulesReducer from './schedulesReducers';
import activitiesReducer from './activitiesReducer';
import userReducer from './userReducer';
import userSchedulesReducer from './userSchedulesReducer';

export default combineReducers({
  schedulesStateObject: schedulesReducer,
  activitiesStateObject: activitiesReducer,
  userObject: userReducer,
  userSchedulesObject: userSchedulesReducer,
});
