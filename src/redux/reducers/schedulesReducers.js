import { FETCH_SCHEDULES_REQUEST, FETCH_SCHEDULES_SUCCESS, FETCH_SCHEDULES_FAIL } from '../../constants/types';

const initialState = {
  schedules: [{}],
};

const schedulesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SCHEDULES_REQUEST:
      return {
        loading: true,
        schedules: [{}],
      };
    case FETCH_SCHEDULES_SUCCESS:
      return {
        loading: false,
        success: true,
        schedules: action.payload,
      };
    case FETCH_SCHEDULES_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default schedulesReducer;
