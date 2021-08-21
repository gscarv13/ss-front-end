import {
  USER_SIGN_IN_REQUEST, USER_SIGN_IN_SUCCESS, USER_SIGN_IN_FAIL,
  USER_SIGN_UP_REQUEST, USER_SIGN_UP_SUCCESS, USER_SIGN_UP_FAIL, IS_LOGGED_IN,
} from '../../constants/types';

const initialState = {
  user: {},
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
        user: action.payload,
      };
    case USER_SIGN_IN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case USER_SIGN_UP_REQUEST:
      return {
        loading: true,
        user: {},
      };
    case USER_SIGN_UP_SUCCESS:
      return {
        loading: false,
        user: action.payload,
      };
    case USER_SIGN_UP_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case IS_LOGGED_IN:
      return {
        logged_in: action.payload.logged_in,
        user: action.payload.details,
      };
    default:
      return state;
  }
};

export default userReducer;
