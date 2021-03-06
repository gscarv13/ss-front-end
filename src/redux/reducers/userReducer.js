import {
  USER_SIGN_IN_REQUEST, USER_SIGN_IN_SUCCESS, USER_SIGN_IN_FAIL,
  USER_SIGN_UP_REQUEST, USER_SIGN_UP_SUCCESS, USER_SIGN_UP_FAIL,
  USER_SIGN_OUT_REQUEST, USER_SIGN_OUT_SUCCESS, USER_SIGN_OUT_FAIL,
} from '../../constants/types';

const currentUser = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : {};

const initialState = {
  user: currentUser,
  logged_in: false,
  error: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGN_IN_REQUEST:
      return {
        loading: true,
        user: {},
      };
    case USER_SIGN_IN_SUCCESS:
      return {
        loading: false,
        success: true,
        loggedIn: true,
        user: action.payload,
      };
    case USER_SIGN_IN_FAIL:
      return {
        loading: false,
        loggedIn: false,
        signInError: action.payload,
      };
    case USER_SIGN_UP_REQUEST:
      return {
        loading: true,
        user: {},
      };
    case USER_SIGN_UP_SUCCESS:
      return {
        loading: false,
        success: true,
        loggedIn: true,
        user: action.payload,
      };
    case USER_SIGN_UP_FAIL:
      return {
        loading: false,
        loggedIn: true,
        signUpError: action.payload,
      };
    case USER_SIGN_OUT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_SIGN_OUT_SUCCESS:
      return {
        user: {},
        loading: false,
        logged_in: false,
        signOut: true,
      };
    case USER_SIGN_OUT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
