import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Calendar from 'react-calendar';
import Loading from '../components/general/Loading';
import ErrorToast from '../components/general/ErrorToast';
import 'react-calendar/dist/Calendar.css';
import SelectSchedule from '../components/SelectSchedule';
import { fetchUserSchedulesAction } from '../redux/actions/userSchedulesActions';
import fetchSchedulesAction from '../redux/actions/scheduleAction';

const Schedules = () => {
  const dispatch = useDispatch();
  const schedulesDispatchResult = useSelector((state) => state.schedulesStateObject);
  const userSchedulesDispatchResult = useSelector((state) => state.userSchedulesObject);

  const { schedules, error, loading } = schedulesDispatchResult;
  const { userSchedules } = userSchedulesDispatchResult;
  const { id } = useParams();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    dispatch(fetchSchedulesAction(id));
    dispatch(fetchUserSchedulesAction(id, user.id));
  }, []);

  const [pickDate, setPickDate] = useState(null);
  const currentDate = new Date();

  return (
    <div>
      {
        loading
          ? <Loading />
          : (
            <>
              <h1>SCHEDULES</h1>
              {error && <ErrorToast error={error} />}
              <Calendar
                onChange={setPickDate}
                value={currentDate}
              />
            </>
          )
      }
      {
        pickDate && (
        <SelectSchedule
          schedules={schedules}
          current={pickDate}
          mySchedules={userSchedules}
          activityId={id}
        />
        )
      }
    </div>
  );
};

export default Schedules;
