import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import fetchSchedulesAction from '../redux/actions/scheduleActions';
import Loading from '../components/general/Loading';
import ErrorToast from '../components/general/ErrorToast';

const Schedules = () => {
  const dispatch = useDispatch();
  const schedulesDispatchResult = useSelector((state) => state.schedulesStateObject);
  const { schedules, error, loading } = schedulesDispatchResult;

  useEffect(() => {
    dispatch(fetchSchedulesAction());
  }, []);

  return (
    <div>
      {
        loading
          ? <Loading />
          : (
            <>
              <h1>SCHEDULES</h1>
              <div>
                {schedules.map((item) => <p key={item.id}>{item.date}</p>)}
              </div>
              {error && <ErrorToast error={error} />}
            </>
          )

      }
    </div>
  );
};

export default Schedules;
