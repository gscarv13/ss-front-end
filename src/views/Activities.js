import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import fetchActivitiesAction from '../redux/actions/activitiesActions';
import Loading from '../components/general/Loading';
import ErrorToast from '../components/general/ErrorToast';

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
              {error && <ErrorToast error={error} />}
            </div>
          )
      }
    </div>
  );
};

export default Activities;
