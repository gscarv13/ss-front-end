import {
  USER_SIGN_IN, USER_SIGN_UP, IS_LOGGED_IN, USER_SIGN_IN_FAIL, USER_SIGN_UP_FAIL,
} from '../types';

const initialState = {
  user: {},
  session: { logged_in: false },
  error: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGN_IN:
      return {
        ...state,
        user: action.payload,
      };
    case USER_SIGN_IN_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case USER_SIGN_UP:
      return {
        ...state,
        user: action.payload,
      };
    case USER_SIGN_UP_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case IS_LOGGED_IN:
      return {
        ...state,
        session: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
