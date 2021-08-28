import { Link } from 'react-router-dom';
import UserDashboard from '../components/UserDashboard';
import '../assets/stylesheets/Home.css';

const Home = () => {
  const user = JSON.parse(localStorage.getItem('user'))
    ? JSON.parse(localStorage.getItem('user')).first_name
    : null;

  return (
    <div className="Home">
      {
        user
          ? (
            <>
              <h1>
                Welcome!
                { user && user }
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
