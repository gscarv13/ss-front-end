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
    if (user) {
      dispatch(fetchUserSchedulesAction(null, user.id));
    }
  }, [destroyed]);

  return (
    <div>
      {
        userSchedules && userSchedules.length > 0
          ? <UserSchedulesTable schedules={userSchedules} />
          : (
            <div className="No-Schedules">
              <p>Nenhuma aula agendada ainda! De uma olhada nas aulas disponíveis</p>
              <Link to="/activities" className="Button">Agendar</Link>
            </div>
          )
      }
    </div>
  );
};

export default UserDashboard;
