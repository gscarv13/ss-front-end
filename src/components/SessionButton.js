import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import WelcomeUser from './WelcomeUser';
import { signOut } from '../redux/actions/userActions';

const SessionButton = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userObject);
  const { user, loggedIn } = userState;
  console.log(user);

  const handleClick = () => {
    dispatch(signOut());
  };

  return (
    <div>
      {
        loggedIn
          ? (
            <>
              <WelcomeUser user={user.user} />
              <button type="button" onClick={handleClick}>LOGOUT</button>
            </>
          )
          : (
            <div>
              Welcome!
              {' '}
              <Link to="/signin">Login / Sign Up</Link>
            </div>
          )
      }
    </div>
  );
};

export default SessionButton;
