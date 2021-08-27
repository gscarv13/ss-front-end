import UserDashboard from '../components/UserDashboard';
import '../assets/Home.css';

const Home = () => {
  const user = JSON.parse(localStorage.getItem('user'))
    ? JSON.parse(localStorage.getItem('user')).first_name
    : null;

  return (
    <div className="Home">
      <h1>
        Welcome!
        { user && user }
      </h1>
      <UserDashboard />
    </div>
  );
};

export default Home;
