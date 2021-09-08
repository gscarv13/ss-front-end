import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const currentUser = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : {};

const loggedIn = localStorage.getItem('loggedIn')
  ? JSON.parse(localStorage.getItem('loggedIn'))
  : false;

const initialState = {
  userObject: { user: currentUser, loggedIn },
  schedulesStateObject: { schedules: [{}] },
  userSchedulesObject: { userSchedules: [{ date: null }] },
};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware),
);

export default store;
