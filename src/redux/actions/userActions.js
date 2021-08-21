import axios from 'axios';
import {
  USER_SIGN_IN_REQUEST, USER_SIGN_IN_SUCCESS, USER_SIGN_IN_FAIL,
  USER_SIGN_UP_REQUEST, USER_SIGN_UP_SUCCESS, USER_SIGN_UP_FAIL, IS_LOGGED_IN,
} from '../../constants/types';
import { BASE_URL, SESSIONS_PATH, REGISTRATION_PATH } from '../../constants/enpoints';
import handleRequestError from '../../helpers/handleRequestError';

const axiosConfig = { withCredentials: true };

export const userSignIn = (loginDetails) => async (dispatch) => {
  const url = BASE_URL + SESSIONS_PATH;
  try {
    dispatch({ type: USER_SIGN_IN_REQUEST });
    const res = await axios.post(url, loginDetails, axiosConfig);
    dispatch({ type: USER_SIGN_IN_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: USER_SIGN_IN_FAIL, payload: err.response.data.error });
  }
};

export const userSignUp = (registrationDetails) => async (dispatch) => {
  const url = BASE_URL + REGISTRATION_PATH;
  try {
    dispatch({ type: USER_SIGN_UP_REQUEST });
    const res = await axios.post(url, registrationDetails, axiosConfig);
    dispatch({ type: USER_SIGN_UP_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: USER_SIGN_UP_FAIL, payload: handleRequestError(err) });
  }
};

export const isLoggedIn = () => async (dispatch) => {
  const url = `${BASE_URL}/api/logged_in`;
  let result = null;
  try {
    const response = await axios.get(url, { withCredentials: true });
    if (response.status === 204) {
      result = { logged_in: false };
    } else {
      result = response.data;
    }
    dispatch({
      type: IS_LOGGED_IN,
      payload: result,
    });
  } catch (error) {
    dispatch({
      type: IS_LOGGED_IN,
      payload: handleRequestError(error),
    });
  }
};
