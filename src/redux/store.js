import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import Cookies from 'js-cookie';
import rootReducer from './reducers';

const currentUser = Cookies.get('_session')
  ? Cookies.get('_session').replaceAll('=>', ':').replaceAll('+', '')
  : null;

const initialState = {
  userObject: currentUser,
};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware),
);

export default store;
