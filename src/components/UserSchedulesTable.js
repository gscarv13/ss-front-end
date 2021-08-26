import PropTypes from 'prop-types';
import '../assets/UserSchedulesTable.css';
import { useDispatch } from 'react-redux';
import { destroyUserScheduleAction } from '../redux/actions/userSchedulesActions';

const UserSchedulesTable = ({ schedules }) => {
  const dispatch = useDispatch();
  const handleDestroy = (e) => {
    e.preventDefault();
    const scheduleId = e.target.id;
    dispatch(destroyUserScheduleAction(scheduleId));
  };

  return (
    <div className="UserDashboard-Table-Container">
      <p>Booked classes</p>
      <table>
        <thead>
          <tr>
            <td>Activity</td>
            <td>Date</td>
            <td />
          </tr>
        </thead>
        <tbody>
          {
          schedules.map((item) => (
            <tr key={item.id}>
              <td>{item.activity}</td>
              <td>{item.date}</td>
              <td>
                <button onClick={handleDestroy} id={item.id} className="Cancel" type="button">Cancel</button>
              </td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  );
};

UserSchedulesTable.propTypes = {
  schedules: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default UserSchedulesTable;
