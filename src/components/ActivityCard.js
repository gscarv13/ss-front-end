import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ActivityCard = ({
  title, level, activityType, description, image, id,
}) => {
  console.log('asd');
  return (
    <div>
      <img src={image} alt="" />
      <div>
        <h5>
          {title}
          {' '}
          <span>{activityType}</span>
        </h5>
        <div>
          <span>{level}</span>
          <p>{description}</p>
        </div>
        <div>
          icons
        </div>
        <Link to={`/schedules/${id}`}>Details</Link>
      </div>
    </div>
  );
};

ActivityCard.propTypes = {
  title: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  activityType: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ActivityCard;
