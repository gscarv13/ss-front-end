import { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Icon } from '@iconify/react';
import SelectSchedule from '../components/Schedules/SelectSchedule';
import '../assets/stylesheets/Schedules.css';

const Schedules = () => {
  const { state } = useLocation();
  const { activity } = state;
  const { id } = useParams();
  const [pickDate, setPickDate] = useState(null);
  const currentDate = new Date();

  return (
    <div className="Schedules">
      <div className="Schedules-Left-Side">
        <div className="Schedules-Activity-Info">
          <h1>{`${activity.title} ${activity.activity_type}`}</h1>
          <img src={activity.image} alt="" />
          <div>
            <h4>Description</h4>
            {activity.description}
          </div>
        </div>
        <Link to="/activities">
          <div className="Back-Button" style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Icon icon="akar-icons:play" width="20" height="20" hFlip />
          </div>
        </Link>

      </div>
      <div className="Schedules-Right-Side">
        <h3>Book a Class</h3>
        <Calendar
          onChange={setPickDate}
          value={currentDate}
        />
        <div className="DotSeparator" />
        {
        pickDate && (
        <SelectSchedule
          current={pickDate}
          activityId={id}
        />
        )
      }
      </div>
    </div>
  );
};

export default Schedules;
