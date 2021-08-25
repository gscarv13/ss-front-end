import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../assets/ActivityCard.css';
import { Icon } from '@iconify/react';

const ActivityCard = ({
  title, level, activityType, description, image, id,
}) => (
  <>
    <div className="ActivityCard">
      <img src={image} alt="" />
      <div className="ActivityCard-Details">
        <Link to={`/schedules/${id}`}>
          <h5>
            {title}
            {' '}
            <span>{activityType}</span>
          </h5>
        </Link>
        <div className="DotSeparator" />
        <div className="ActivityCard-Description">
          <p>
            {level}
            {' '}
            º
            {' '}
            {description}
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
  title: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  activityType: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ActivityCard;
