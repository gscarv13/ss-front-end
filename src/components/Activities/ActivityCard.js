import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../assets/stylesheets/ActivityCard.css';
import { Icon } from '@iconify/react';

const ActivityCard = ({ activity }) => (
  <>
    <div className="ActivityCard">
      <div className="ActivityCard-Image">
        <img src={activity.image} alt="" />
      </div>
      <div className="ActivityCard-Details">
        <Link to={{ pathname: `/schedules/${activity.id}`, state: { activity } }}>
          <h5>
            {activity.title}
            {' '}
            <span>{activity.activity_type}</span>
          </h5>
        </Link>
        <div className="DotSeparator" />
        <div className="ActivityCard-Description">
          <p>
            {activity.level}
            {' '}
            •
            {' '}
            {activity.description}
          </p>
        </div>
        <div className="ActivityCard-Social">
          <a className="ActivityCard-Link-Social" href="https://twitter.com/" target="_blank" rel="noreferrer">
            <Icon icon="grommet-icons:twitter" width="15" height="15" />
          </a>
          <a className="ActivityCard-Link-Social" href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <Icon icon="brandico:facebook" width="15" height="15" />
          </a>
          <a className="ActivityCard-Link-Social" href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <Icon icon="brandico:facebook" width="15" height="15" />
          </a>
        </div>
      </div>
    </div>
  </>
);

ActivityCard.propTypes = {
  activity: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ActivityCard;
