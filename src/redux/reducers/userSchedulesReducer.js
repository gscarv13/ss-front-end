import {
  CREATE_USER_SCHEDULE_FAIL,
  CREATE_USER_SCHEDULE_REQUEST,
  CREATE_USER_SCHEDULE_SUCCESS,
  DESTROY_USER_SCHEDULE_FAIL,
  DESTROY_USER_SCHEDULE_REQUEST,
  DESTROY_USER_SCHEDULE_SUCCESS,
  FETCH_USER_SCHEDULES_FAIL,
  FETCH_USER_SCHEDULES_REQUEST,
  FETCH_USER_SCHEDULES_SUCCESS,
} from '../../constants/types';

const initialState = {
  userSchedules: [{}],
};

const userSchedulesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_SCHEDULES_REQUEST:
      return {
        loadingFetch: true,
        userSchedules: [{}],
      };
    case FETCH_USER_SCHEDULES_SUCCESS:
      return {
        loadingFetch: false,
        success: true,
        userSchedules: action.payload,
      };
    case FETCH_USER_SCHEDULES_FAIL:
      return {
        loadingFetch: false,
        error: action.payload,
      };
    case CREATE_USER_SCHEDULE_REQUEST:
      return {
        loadingCreate: true,
        userSchedules: [{}],
      };
    case CREATE_USER_SCHEDULE_SUCCESS:
      return {
        loadingCreate: false,
        created: true,
        userSchedules: [{}],
      };
    case CREATE_USER_SCHEDULE_FAIL:
      return {
        loadingCreate: false,
        error: action.payload,
        userSchedules: [{}],
      };
    case DESTROY_USER_SCHEDULE_REQUEST:
      return {
        loadingDestroy: true,
        userSchedules: [{}],
      };
    case DESTROY_USER_SCHEDULE_SUCCESS:
      return {
        loadingDestroy: false,
        destroyed: true,
        userSchedules: [{}],
      };
    case DESTROY_USER_SCHEDULE_FAIL:
      return {
        loadingDestroy: false,
        error: action.payload,
        userSchedules: [{}],
      };
    default:
      return state;
  }
};

export default userSchedulesReducer;
