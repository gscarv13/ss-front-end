import axios from 'axios';
import { FETCH_ACTIVITIES, FETCH_SCHEDULES } from '../types';
import { BASE_URL, ACTIVITIES_PATH, SCHEDULES_PATH } from '../../helpers/enpoints';

// const axiosConfig = { withCredentials: true };

export const fetchSchedules = () => async (dispatch) => {
  const data = await axios.get(
    BASE_URL + SCHEDULES_PATH,
  );
  dispatch({
    type: FETCH_SCHEDULES,
    payload: data.data,
  });
};

export const fetchActivities = () => async (dispatch) => {
  const data = await axios.get(
    BASE_URL + ACTIVITIES_PATH,
  );

  dispatch({
    type: FETCH_ACTIVITIES,
    payload: data.data,
  });
};
