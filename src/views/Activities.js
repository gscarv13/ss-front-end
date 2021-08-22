import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import fetchActivitiesAction from '../redux/actions/activitiesActions';
import Loading from '../components/general/Loading';
import ErrorToast from '../components/general/ErrorToast';
import ActivityCard from '../components/ActivityCard';
import image from '../assets/snowboard.png';

const Activities = () => {
  const dispatch = useDispatch();
  const activitiesDispatchResults = useSelector((state) => state.activitiesStateObject);
  const { error, activities, loading } = activitiesDispatchResults;

  useEffect(() => {
    dispatch(fetchActivitiesAction());
  }, []);

  return (
    <div>
      {
        loading
          ? <Loading />
          : (
            <div>
              <h1>Activities</h1>
              <p>Please select an activity for more details</p>
              <div>
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
              {error && <ErrorToast error={error} />}
            </div>
          )
      }
    </div>
  );
};

export default Activities;
