import axios from 'axios';
import { USER_SIGN_IN, USER_SIGN_UP } from '../types';
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
    throw new Error(err);
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
