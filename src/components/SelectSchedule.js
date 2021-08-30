import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import formatDate from '../helpers/formatDate';
import { createUserScheduleAction, fetchUserSchedulesAction, destroyUserScheduleAction } from '../redux/actions/userSchedulesActions';
import fetchSchedulesAction from '../redux/actions/scheduleAction';
import '../assets/stylesheets/SelectSchedule.css';
import Loading from './general/Loading';

const SelectSchedule = ({ current, activityId }) => {
  const dispatch = useDispatch();
  const schedulesState = useSelector((state) => state.schedulesStateObject);
  const userScheduleState = useSelector((state) => state.userSchedulesObject);
  const user = JSON.parse(localStorage.getItem('user'));

  const { schedules } = schedulesState;
  const {
    created, destroyed, userSchedules, loadingCreate,
  } = userScheduleState;

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    dispatch(fetchSchedulesAction(activityId));
    if (user) {
      dispatch(fetchUserSchedulesAction(activityId, user.id));
    }
  }, [created, destroyed]);

  const handleCreateSchedule = (e) => {
    const user = JSON.parse(localStorage.getItem('user'));
    e.preventDefault();

    const scheduleDetails = {
      activityId,
      userId: user.id,
      date: e.target.getAttribute('data-date'),
    };
    dispatch(createUserScheduleAction(scheduleDetails));
    dispatch(fetchSchedulesAction(activityId));
    dispatch(fetchUserSchedulesAction(activityId, user.id));
  };

  const handleDestroySchedule = (e) => {
    const user = JSON.parse(localStorage.getItem('user'));
    e.preventDefault();
    const scheduleId = e.target.id;

    dispatch(destroyUserScheduleAction(scheduleId));
    dispatch(fetchSchedulesAction(activityId));
    dispatch(fetchUserSchedulesAction(activityId, user.id));
  };

  const bookClass = (current) => {
    let button = null;
    const myshcedulesCheck = userSchedules && userSchedules.find(({ date }) => date === current);

    if (myshcedulesCheck) {
      button = <button className="Schedule-Button Cancel" onClick={handleDestroySchedule} id={myshcedulesCheck.id} type="button">Cancel</button>;
    } else if (schedules.find(({ date }) => date === current)) {
      button = <button className="Schedule-Button Unavailable" type="button">Unavailable</button>;
    } else {
      button = <button className="Schedule-Button" onClick={handleCreateSchedule} data-date={current} type="button">Book a Class</button>;
    }
    return button;
  };

  return (
    <div>
      { loadingCreate && <div><Loading /></div> }
      {
        user
          ? (
            <div className="SelectSchedule-BookAClass">
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
          )
          : (

            <p className="SignIn">
              To book a class please sign in
              <Link to="/signin" className="Button">Sign In</Link>
            </p>

          )
      }
      { (destroyed || created) && <Redirect to="/home" /> }
    </div>
  );
};

SelectSchedule.propTypes = {
  current: PropTypes.objectOf(PropTypes.string).isRequired,
  activityId: PropTypes.string.isRequired,
};

export default SelectSchedule;
