import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchUserSchedulesAction } from '../../redux/actions/userSchedulesActions';
import UserSchedulesTable from './UserSchedulesTable';
import '../../assets/stylesheets/UserDashboard.css';

const UserDashboard = () => {
  const userScheduleState = useSelector((state) => state.userSchedulesObject);
  const dispatch = useDispatch();
  const { userSchedules, destroyed } = userScheduleState;

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    dispatch(fetchUserSchedulesAction(null, user.id));
  }, [destroyed]);

  return (
    <div>
      {
        userSchedules && userSchedules.length > 0
          ? <UserSchedulesTable schedules={userSchedules} />
          : (
            <div className="No-Schedules">
              <p>No Lesson Scheduled yet! Check out our activities by clicking</p>
              <Link to="/activities" className="Button">Book Now</Link>
            </div>
          )
      }
    </div>
  );
};

export default UserDashboard;
