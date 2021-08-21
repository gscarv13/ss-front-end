import axios from 'axios';
import { FETCH_ACTIVITIES, FETCH_SCHEDULES } from '../../constants/types';
import { BASE_URL, ACTIVITIES_PATH, SCHEDULES_PATH } from '../../constants/enpoints';

export const fetchSchedules = () => async (dispatch) => {
  const res = await axios.get(
    BASE_URL + SCHEDULES_PATH,
  );
  dispatch({
    type: FETCH_SCHEDULES,
    payload: res.data,
  });
};

export const fetchActivities = () => async (dispatch) => {
  const res = await axios.get(
    BASE_URL + ACTIVITIES_PATH,
  );

  dispatch({
    type: FETCH_ACTIVITIES,
    payload: res.data,
  });
};
