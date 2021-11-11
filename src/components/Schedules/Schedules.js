import { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import SelectSchedule from './SelectSchedule';
import { containerVariants } from '../../constants/animationVariants';
import '../../assets/stylesheets/Schedules.css';

const Schedules = () => {
  const { state } = useLocation();
  const { activity } = state;
  const { id } = useParams();
  const [pickDate, setPickDate] = useState(null);
  const currentDate = new Date();

  return (
    <motion.div
      className="Schedules"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="Schedules-Left-Side">
        <div className="Schedules-Activity-Info">
          <h1>{`${activity.title} ${activity.activity_type}`}</h1>
          <img src={activity.image} alt="" />
          <div>
            <h4>Descrição</h4>
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
        <h3>Agende uma aula</h3>
        <div data-testid="calendar">
          <Calendar
            onChange={setPickDate}
            value={currentDate}
          />
        </div>
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
    </motion.div>
  );
};

export default Schedules;
