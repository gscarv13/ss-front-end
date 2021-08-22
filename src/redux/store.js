import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const currentUser = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : {};

const initialState = {
  userObject: currentUser,
  schedulesStateObject: { schedules: [{}] },
};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware),
);

export default store;
