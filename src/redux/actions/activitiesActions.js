import axios from 'axios';
import {
  FETCH_ACTIVITIES_REQUEST, FETCH_ACTIVITIES_SUCCESS, FETCH_ACTIVITIES_FAIL,
} from '../../constants/types';
import { BASE_URL, ACTIVITIES_PATH } from '../../constants/enpoints';

const fetchActivitiesAction = () => async (dispatch) => {
  const url = BASE_URL + ACTIVITIES_PATH;
  try {
    dispatch({ type: FETCH_ACTIVITIES_REQUEST });
    const res = await axios.get(url);
    dispatch({ type: FETCH_ACTIVITIES_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_ACTIVITIES_FAIL, payload: error.response });
  }
};

export default fetchActivitiesAction;
