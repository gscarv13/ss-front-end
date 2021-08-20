import axios from 'axios';
import {
  USER_SIGN_IN, USER_SIGN_IN_FAIL, USER_SIGN_UP, USER_SIGN_UP_FAIL, IS_LOGGED_IN,
} from '../types';
import { BASE_URL, SESSIONS_PATH, REGISTRATION_PATH } from '../../helpers/enpoints';
import handleRequestError from '../../helpers/handleRequestError';

const axiosConfig = { withCredentials: true };

export const userSignIn = (loginDetails) => async (dispatch) => {
  const url = BASE_URL + SESSIONS_PATH;
  try {
    const res = await axios.post(url, loginDetails, axiosConfig);

    dispatch({
      type: USER_SIGN_IN,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: USER_SIGN_IN_FAIL,
      payload: handleRequestError(err),
    });
  }
};

export const userSignUp = (registrationDetails) => async (dispatch) => {
  const url = BASE_URL + REGISTRATION_PATH;
  try {
    const res = await axios.post(url, registrationDetails, axiosConfig);

    dispatch({
      type: USER_SIGN_UP,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: USER_SIGN_UP_FAIL,
      payload: handleRequestError(err),
    });
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
