import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import SelectSchedule from '../components/SelectSchedule';

const Schedules = () => {
  const { id } = useParams();

  const [pickDate, setPickDate] = useState(null);
  const currentDate = new Date();

  return (
    <div>

      <h1>SCHEDULES</h1>
      <Calendar
        onChange={setPickDate}
        value={currentDate}
      />

      {
        pickDate && (
        <SelectSchedule
          current={pickDate}
          activityId={id}
        />
        )
      }
    </div>
  );
};

export default Schedules;
