import axios from 'axios';
import { USER_SIGN_IN, USER_SIGN_UP, IS_LOGGED_IN } from '../types';
import { BASE_URL, SESSIONS_PATH, REGISTRATION_PATH } from '../../helpers/enpoints';

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
    console.log(err);
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
    throw new Error(err);
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
  } catch (err) {
    throw new Error(err);
  }

  dispatch({
    type: IS_LOGGED_IN,
    payload: result,
  });
};
