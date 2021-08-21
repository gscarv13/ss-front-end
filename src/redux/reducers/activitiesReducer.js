import { FETCH_ACTIVITIES_REQUEST, FETCH_ACTIVITIES_SUCCESS, FETCH_ACTIVITIES_FAIL } from '../../constants/types';

const initialState = {
  activities: [{}],
};

const activitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ACTIVITIES_REQUEST:
      return {
        ...state,
        loading: true,
        activities: [{}],
      };
    case FETCH_ACTIVITIES_SUCCESS:
      return {
        loading: false,
        success: true,
        activities: action.payload,
      };
    case FETCH_ACTIVITIES_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default activitiesReducer;
