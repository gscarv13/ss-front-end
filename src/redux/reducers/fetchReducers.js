import { FETCH_ACTIVITIES, FETCH_SCHEDULES } from '../types';

const initialState = {};

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };
    case FETCH_SCHEDULES:
      return {
        ...state,
        schedules: action.payload,
      };
    default:
      return { ...state };
  }
};

export default fetchReducer;
