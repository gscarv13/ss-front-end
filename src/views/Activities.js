import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Icon } from '@iconify/react';
import fetchActivitiesAction from '../redux/actions/activitiesActions';
import Loading from '../components/general/Loading';
import ErrorToast from '../components/general/ErrorToast';
import ActivityCard from '../components/ActivityCard';
import image from '../assets/snowboard.png';
import '../assets/Activities.css';

const Activities = () => {
  const dispatch = useDispatch();
  const activitiesDispatchResults = useSelector((state) => state.activitiesStateObject);
  const { error, activities, loading } = activitiesDispatchResults;

  useEffect(() => {
    dispatch(fetchActivitiesAction());
  }, []);

  return (
    <div className="Activities">
      {
        loading
          ? <Loading />
          : (
            <>
              <h1>Activities</h1>
              <h4>Please select an activity for more details</h4>
              <div className="Activities-Slide">
                <div className="Activities-Slide-Left-Button">
                  <Icon icon="akar-icons:play" width="20" height="20" hFlip />
                </div>
                <div className="Activities-Slide-Content">
                  {
                  activities.map((act) => (
                    <ActivityCard
                      key={act.id}
                      id={act.id}
                      image={image}
                      title={act.title}
                      level={act.level}
                      activityType={act.activity_type}
                      description={act.description}
                    />
                  ))
                }
                </div>
                <div className="Activities-Slide-Right-Button">
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
