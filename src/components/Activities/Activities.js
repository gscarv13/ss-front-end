import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import fetchActivitiesAction from '../../redux/actions/activitiesActions';
import Loading from '../General/Loading';
import ErrorToast from '../General/ErrorToast';
import ActivityCard from './ActivityCard';
import '../../assets/stylesheets/Activities.css';

const Activities = () => {
  const dispatch = useDispatch();
  const activitiesState = useSelector((state) => state.activitiesStateObject);
  const { error, activities, loading } = activitiesState;
  const activityRef = useRef(null);

  useEffect(() => {
    dispatch(fetchActivitiesAction());
  }, []);

  const slideLeft = () => {
    if (activityRef.current) {
      activityRef.current.scrollBy({
        top: 0,
        left: -400,
        behavior: 'smooth',
      });
    }
  };

  const slideRight = () => {
    if (activityRef.current) {
      activityRef.current.scrollBy({
        top: 0,
        left: 400,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="Activities">
      {
        loading
          ? <Loading />
          : (
            <>
              <h1>Activities</h1>
              <h4>Please select an activity for more details</h4>
              <div className="DotSeparator" />
              <div className="Activities-Slide" data-testid="activities-slider">
                <div className="Activities-Slide-Left-Button" onClick={slideLeft} role="presentation">
                  <Icon icon="akar-icons:play" width="20" height="20" hFlip />
                </div>
                <div className="Activities-Slide-Content" ref={activityRef}>
                  {
                  activities.map((act) => (
                    <ActivityCard
                      key={`id-${act.id}`}
                      activity={act}
                    />
                  ))
                }
                </div>
                <div className="Activities-Slide-Right-Button" onClick={slideRight} role="presentation">
                  <Icon icon="akar-icons:play" width="20" height="20" />
                </div>
              </div>
              {error && <ErrorToast error={error} />}
            </>
          )
      }
    </div>
  );
};

export default Activities;
