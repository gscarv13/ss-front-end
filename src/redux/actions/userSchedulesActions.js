import axios from 'axios';
import {
  FETCH_USER_SCHEDULES_REQUEST,
  FETCH_USER_SCHEDULES_SUCCESS,
  FETCH_USER_SCHEDULES_FAIL,
  CREATE_USER_SCHEDULE_REQUEST,
  CREATE_USER_SCHEDULE_SUCCESS,
  CREATE_USER_SCHEDULE_FAIL,
  DESTROY_USER_SCHEDULE_SUCCESS,
  DESTROY_USER_SCHEDULE_FAIL,
  DESTROY_USER_SCHEDULE_REQUEST,
} from '../../constants/types';
import { BASE_URL, SCHEDULES_PATH, USER_SCHEDULES_PATH } from '../../constants/enpoints';

export const fetchUserSchedulesAction = (activityId, userId) => async (dispatch) => {
  const url = `${BASE_URL}${USER_SCHEDULES_PATH}`;
  try {
    dispatch({ type: FETCH_USER_SCHEDULES_REQUEST });
    const config = {
      withCredentials: true,
      headers: { 'Content-Type': 'application/json' },
      params: {
        activity: activityId,
        user: userId,
      },
      data: {},
    };
    const res = await axios.get(url, config);
    dispatch({ type: FETCH_USER_SCHEDULES_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_USER_SCHEDULES_FAIL, payload: error.response });
  }
};

export const createUserScheduleAction = (scheduleDetails) => async (dispatch) => {
  const url = `${BASE_URL}${SCHEDULES_PATH}`;
  try {
    dispatch({ type: CREATE_USER_SCHEDULE_REQUEST });
    const config = {
      withCredentials: true,
      headers: { 'Content-Type': 'application/json' },
      params: {
        'schedule[activity_id]': scheduleDetails.activityId,
        'schedule[user_id]': scheduleDetails.userId,
        'schedule[date]': scheduleDetails.date,
      },
      data: {},
    };
    const res = await axios.post(url, scheduleDetails, config);
    dispatch({ type: CREATE_USER_SCHEDULE_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: CREATE_USER_SCHEDULE_FAIL, payload: error.response });
  }
};

export const destroyUserScheduleAction = (id) => async (dispatch) => {
  const url = `${BASE_URL}${SCHEDULES_PATH}/${id}`;
  try {
    dispatch({ type: DESTROY_USER_SCHEDULE_REQUEST });
    const config = { withCredentials: true };
    const res = await axios.delete(url, config);
    dispatch({ type: DESTROY_USER_SCHEDULE_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: DESTROY_USER_SCHEDULE_FAIL, payload: error.response });
  }
};
