import { connect } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchActivities } from '../redux/actions/fetchActions';

const Activities = ({ activities, fetchActivities }) => {
  useEffect(() => {
    fetchActivities();
  }, []);

  return (
    <>
      <h1>Activities</h1>
      <p>Please select an activity for more details</p>
      <div>
        <div>
          <img src="" alt="" />
          <div>
            <h5>
              Activity title º
              <span>LEVEL</span>
            </h5>
            <div>
              <span>Level</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consectetur, doloremque eveniet explicabo facilis fugit id
                illo impedit minus nam nesciunt, quasi quibusdam voluptas voluptate. A
                d animi, fugiat nulla provident quaerat sit totam?
              </p>
            </div>
            <div>
              icons
            </div>
          </div>
        </div>
      </div>
      <div>
        {activities.map((act) => <p key={act.id}>{act.title}</p>)}
      </div>
    </>
  );
};

Activities.propTypes = {
  activities: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchActivities: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activities: state.fetchReducersObject.activities,
});

export default connect(mapStateToProps, { fetchActivities })(Activities);
