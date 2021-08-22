import axios from 'axios';
import {
  FETCH_SCHEDULES_REQUEST, FETCH_SCHEDULES_SUCCESS, FETCH_SCHEDULES_FAIL,
} from '../../constants/types';
import { BASE_URL, SCHEDULES_PATH } from '../../constants/enpoints';

const fetchSchedulesAction = (id) => async (dispatch) => {
  const url = `${BASE_URL + SCHEDULES_PATH}/${id}`;
  try {
    dispatch({ type: FETCH_SCHEDULES_REQUEST });

    const res = await axios.get(url, { data: JSON.stringify({ id }), withCredentials: true, headers: { 'Content-Type': 'application/json' } });
    dispatch({ type: FETCH_SCHEDULES_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_SCHEDULES_FAIL, payload: error.response });
  }
};

export default fetchSchedulesAction;
