import { connect } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchSchedules } from '../redux/actions/fetchActions';

const Schedules = ({ schedules, fetchSchedules }) => {
  useEffect(() => {
    fetchSchedules();
  }, []);

  return (
    <>
      <h1>SCHEDULES</h1>
      <div>
        {schedules.map((item) => <p key={item.id}>{item.date}</p>)}
      </div>
    </>
  );
};

Schedules.propTypes = {
  schedules: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchSchedules: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  schedules: state.fetchReducersObject.schedules,
});

export default connect(mapStateToProps, { fetchSchedules })(Schedules);
