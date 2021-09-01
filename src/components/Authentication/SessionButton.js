import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { signOut } from '../../redux/actions/userActions';
import '../../assets/stylesheets/Navigation.css';

const SessionButton = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userObject);
  const { user, loggedIn } = userState;

  const handleClick = () => {
    dispatch(signOut(user.id));
      <Redirect to="/logout" />;
  };

  return (
    <>
      {
        loggedIn
          ? (

            <button
              className="Navigation-Link"
              type="button"
              onClick={handleClick}
            >
              LOGOUT
            </button>
          )
          : (
            <NavLink
              className="Navigation-Link"
              activeClassName="Active"
              to="/signin"
            >
              Sign In
            </NavLink>
          )
      }
    </>
  );
};

export default SessionButton;
