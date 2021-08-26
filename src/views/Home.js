import UserDashboard from '../components/UserDashboard';
import '../assets/Home.css';

const Home = () => {
  console.log('home');
  return (
    <div className="Home">
      <h1>HOME</h1>
      <UserDashboard />
    </div>
  );
};

export default Home;
