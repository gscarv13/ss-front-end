import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import formatDate from '../helpers/formatDate';
import { createUserScheduleAction, fetchUserSchedulesAction, destroyUserScheduleAction } from '../redux/actions/userSchedulesActions';
import fetchSchedulesAction from '../redux/actions/scheduleAction';

const SelectSchedule = ({ current, activityId }) => {
  const dispatch = useDispatch();
  const schedulesState = useSelector((state) => state.schedulesStateObject);
  const userScheduleState = useSelector((state) => state.userSchedulesObject);

  const { schedules } = schedulesState;
  const { created, destroyed, userSchedules } = userScheduleState;

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    dispatch(fetchSchedulesAction(activityId));
    dispatch(fetchUserSchedulesAction(activityId, user.id));
  }, [created, destroyed]);

  const handleBookAClass = (e) => {
    e.preventDefault();

    const userId = JSON.parse(localStorage.getItem('user')).id;

    const scheduleDetails = {
      activityId,
      userId,
      date: e.target.getAttribute('data-date'),
    };
    dispatch(createUserScheduleAction(scheduleDetails));
    dispatch(fetchSchedulesAction(activityId));
    dispatch(fetchUserSchedulesAction(activityId, userId));
  };

  const handleDestroySchedule = (e) => {
    e.preventDefault();
    const userId = JSON.parse(localStorage.getItem('user')).id;
    const activityId = e.target.id;

    dispatch(destroyUserScheduleAction(activityId));
    dispatch(fetchSchedulesAction(activityId));
    dispatch(fetchUserSchedulesAction(activityId, userId));
  };

  console.log('personal', userSchedules.length);

  const bookClass = (current) => {
    let button = null;
    const myshcedulesCheck = userSchedules.find(({ date }) => date === current);

    if (myshcedulesCheck) {
      button = <button onClick={handleDestroySchedule} id={myshcedulesCheck.id} type="button">Cancel</button>;
    } else if (schedules.find(({ date }) => date === current)) {
      button = <button type="button">Unavaliable</button>;
    } else {
      button = <button onClick={handleBookAClass} data-date={current} type="button">Book a Class</button>;
    }
    return button;
  };

  return (
    <div>
      { userScheduleState.created && <Redirect to={`/schedules/${activityId}`} /> }
      <br />
      <h3>{current.toLocaleString()}</h3>
      <div>
        <p>
          from: 09:00, to: 10:30
          {bookClass(`${formatDate(current)} 09:00:00`)}
        </p>
        <p>
          from: 11:00, to: 12:30
          {bookClass(`${formatDate(current)} 11:00:00`)}
        </p>
        <p>
          from: 13:30, to: 15:00
          {bookClass(`${formatDate(current)} 13:30:00`)}
        </p>
        <p>
          from: 15:30, to: 17:00
          {bookClass(`${formatDate(current)} 15:30:00`)}
        </p>
      </div>
    </div>
  );
};

SelectSchedule.propTypes = {
  current: PropTypes.objectOf(PropTypes.string).isRequired,
  activityId: PropTypes.string.isRequired,
};

export default SelectSchedule;
