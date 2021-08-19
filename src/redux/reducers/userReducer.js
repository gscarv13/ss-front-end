import { USER_SIGN_IN, USER_SIGN_UP } from '../types';

const initialState = {
  user: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGN_IN:
      return {
        ...state,
        user: action.payload,
      };
    case USER_SIGN_UP:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
