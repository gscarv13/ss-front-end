import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UserDashboard from '../components/UserDashboard';
import '../assets/stylesheets/Home.css';

const Home = () => {
  const userObject = useSelector((state) => state.userObject);
  const { user, loggedIn } = userObject;
  return (
    <div className="Home">
      {
        loggedIn
          ? (
            <>
              <h1>
                Welcome!
                { user && user.first_name }
              </h1>
              <UserDashboard />
            </>
          )
          : (
            <>
              <h1>Wellcome!</h1>
              <p>
                Storm Mountain is a winter sports resort.
                To book a lesson please sign up and sign up
                and visit the activities page.
              </p>
              <Link to="/signin" className="Button">Sign In</Link>
            </>
          )
      }
    </div>
  );
};

export default Home;
