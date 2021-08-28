import axios from 'axios';
import {
  USER_SIGN_IN_REQUEST, USER_SIGN_IN_SUCCESS, USER_SIGN_IN_FAIL,
  USER_SIGN_UP_REQUEST, USER_SIGN_UP_SUCCESS, USER_SIGN_UP_FAIL,
  USER_SIGN_OUT_REQUEST, USER_SIGN_OUT_SUCCESS, USER_SIGN_OUT_FAIL,
} from '../../constants/types';
import { BASE_URL, SESSIONS_PATH, REGISTRATION_PATH } from '../../constants/enpoints';

const axiosConfig = { withCredentials: true };

export const userSignIn = (loginDetails) => async (dispatch) => {
  const url = BASE_URL + SESSIONS_PATH;
  try {
    dispatch({ type: USER_SIGN_IN_REQUEST });
    const res = await axios.post(url, loginDetails, axiosConfig);
    dispatch({ type: USER_SIGN_IN_SUCCESS, payload: res.data });
    localStorage.setItem('user', JSON.stringify(res.data.user));
    localStorage.setItem('loggedIn', JSON.stringify(true));
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
    localStorage.setItem('user', JSON.stringify(res.data));
    localStorage.setItem('loggedIn', JSON.stringify(true));
  } catch (err) {
    dispatch({ type: USER_SIGN_UP_FAIL, payload: err.response.data.error });
  }
};

export const signOut = (userId) => async (dispatch) => {
  const url = `${BASE_URL}${SESSIONS_PATH}/${userId}`;
  try {
    dispatch({ type: USER_SIGN_OUT_REQUEST });
    const res = axios.delete(url, { withCredentials: true });
    dispatch({ type: USER_SIGN_OUT_SUCCESS, payload: res.data });
    localStorage.removeItem('user');
    localStorage.removeItem('loggedIn');
  } catch (error) {
    dispatch({ type: USER_SIGN_OUT_FAIL, payload: error.request });
  }
};
